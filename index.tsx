import React, { Suspense, lazy } from "react"
import { VanillaElementType, compileExpression, isVanillaElement, toDashName } from "./utils"
import { ErrorBoundary } from "@ant-design/pro-components"

type LiteralUnion<T> = T | (string & {})
// type MergeIntersection<T> = { [Key in keyof T]: T[Key] }
// type NotSymbol<K> = K extends Symbol ? never : K
// interface SchemaPropsType<T, P extends keyof T = keyof T> {
//     name: keyof T
//     props?: WrapSchemaType<T[P]>
// }
// type PrefixSchemaType<T> = {
//     [k in keyof T as `\$${NotSymbol<k>}`]?: SchemaPropsType<T> | string
// }
// type WrapSchemaType<T> = MergeIntersection<T & PrefixSchemaType<T>>

// type NNN<T extends object = {}> = {
//     [key in keyof T]: key extends `\$${NotSymbol<key>}` ? SchemaPropsType<T> : any
// }

type SchemaPropsType<T> = {
    name: LiteralUnion<VanillaElementType | keyof T>
    props?: any
}

let __map = {}

type ComponentMapType = Record<string, React.LazyExoticComponent<any> | React.FC<any>>

export function registerComponents(map: ComponentMapType) {
    Object.assign(__map, map)
}

function NotFound(props: {
    name: string
}) {
    return (
        <div style={{ color: 'red', border: '1px solid #eee', padding: '8px 16px' }}>
            <span>`{props.name}`</span>
            <span> component cannot be found</span>
        </div>
    )
}

function getComponent(name: string) {
    const [main, sub] = name.split('.')

    return lazy(() => import('@ant-design/pro-components').then(res => {
        const comp = res[name]
        if (comp) {
            return {
                default: (sub ? res[main][sub] : res[main]) as React.ComponentType,
            }
        }
        return import('antd').then(res => {
            return {
                default: sub && res[main][sub]
                    ? res[main][sub]
                    : () => <NotFound key={name} name={name} />
            }
        })
    }))
}

export default function SchemaComponent<T extends ComponentMapType>(props: {
    schema: SchemaPropsType<T>[]
    context?: Record<string, any>
    style?: React.CSSProperties
    className?: string
    renderNotFound?: (config: any) => React.ReactNode
    renderFallback?: (config: any) => React.ReactNode
}) {

    function handleProps(obj: any) {
        return Object.keys(obj).reduce((acc, key) => {
            const value = obj[key]
            if (key.startsWith('$')) {
                const newKey = key.slice(1)
                if (Array.isArray(value)) {
                    acc[newKey] = value.map(renderItem)
                } else if (value && typeof value === 'object') {
                    acc[newKey] = renderItem(value, '0')
                } else {
                    const result = compileExpression(value, props.context || {})
                    if (typeof result === 'string') {
                        acc[newKey] = renderItem({
                            name: result,
                            props: {},
                        }, '0')
                    } else {
                        // throw ......
                    }
                }
            } else {
                if (Array.isArray(value)) {
                    acc[key] = value.map(handleProps)
                } else if (value && typeof value === 'object') {
                    acc[key] = handleProps(value)
                } else {
                    acc[key] = compileExpression(value, props.context || {})
                }
            }
            return acc
        }, {} as any)
    }

    function renderItem(config: any, key: string | number) {
        const Comp = !config.name
            ? null
            : __map[config.name]
            ? __map[config.name]
            : getComponent(config.name)

        const componentProps = config.props || {}
        const newProps = handleProps(componentProps)

        if (isVanillaElement(config.name)) {
            return React.createElement(config.name, { key, ...newProps })
        }

        if (!Comp) {
            if (props.renderNotFound) {
                return props.renderNotFound(config)
            }
            return (
                <NotFound key={key} name={config.name} />
            )
        }

        return (
            <ErrorBoundary key={key}>
                <Suspense fallback={props.renderFallback ? props.renderFallback(config) : null}>
                    <Comp {...newProps} />
                </Suspense>
            </ErrorBoundary>
        )
    }

    return (
        <div className={props.className} style={props.style}>
            {
                props.schema.map((info, index) => renderItem(info, index))
            }
        </div>
    )
}