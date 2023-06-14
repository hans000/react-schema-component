import React, { Suspense } from "react"
import { VanillaElementType, compileExpression, getComponent, isVanillaElement } from "./utils"

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
        const Comp = getComponent(config.name, __map)
        const componentProps = config.props || {}
        const newProps = handleProps(componentProps)

        if (isVanillaElement(config.name)) {
            return React.createElement(config.name, { key, ...newProps })
        }

        if (!Comp) {
            if (props.renderNotFound) {
                return props.renderNotFound(config)
            }
            return <span style={{ color: 'red', border: '1px solid #eee', padding: '8px 16px' }} key={key}>{config.name} cannot be found</span>
        }

        return (
            <Suspense fallback={props.renderFallback ? props.renderFallback(config) : null}>
                <Comp key={key} {...newProps} />
            </Suspense>
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