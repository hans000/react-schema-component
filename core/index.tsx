import React, { Suspense } from "react"
import { VanillaElementType, compileExpression, isVanillaElement } from "./utils"
import { Wrapper } from "../config"
import ErrorBoundary from "./components/ErrorBoundary"
import NotFound from "./components/NotFound"
import { LoaderProps } from "./components/Wrapper"

type LiteralUnion<T> = T | (string & {})
type ComponentMapType = Record<string, React.LazyExoticComponent<any> | React.FC<any>>
type SchemaPropsType<T> = {
    name: LiteralUnion<VanillaElementType | keyof T>
    props?: any
}

let __map: ComponentMapType = {}
const __handles: LoaderProps[] = []

export let ErrorContainer: React.ComponentType<React.PropsWithChildren> = ErrorBoundary

export function defineConfig(props: {
    loaders?: LoaderProps[]
    componentMap?: ComponentMapType
    ErrorBoundary?: React.ComponentType
}) {
    if (props.componentMap) {
        Object.assign(__map, props.componentMap)
    }
    if (props.loaders) {
        __handles.push(...props.loaders)
    }
    if (props.ErrorBoundary) {
        ErrorContainer = props.ErrorBoundary
    }
}

export default function SchemaComponent<T extends ComponentMapType>(props: {
    schema: SchemaPropsType<T>[]
    context?: Record<string, any>
    renderNotFound?: (config: any) => React.ReactNode
    renderFallback?: (config: any) => React.ReactNode
    style?: React.CSSProperties
    className?: string
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
        const componentProps = config.props || {}
        const newProps = handleProps(componentProps)

        // 原生元素
        if (isVanillaElement(config.name)) {
            return React.createElement(config.name, { key, ...newProps })
        }

        if (__map[config.name]) {
            const Comp = __map[config.name]
            return (
                <ErrorContainer key={key}>
                    <Suspense fallback={props.renderFallback ? props.renderFallback(config) : null}>
                        <Comp {...newProps} />
                    </Suspense>
                </ErrorContainer>
            )
        }

        // 组件库二级组件
        for (const handle of __handles) {
            if (handle.predicate(config.name)) {
                return (
                    <Wrapper key={key} render={handle.render} componentName={config.name} fallback={props.renderFallback ? props.renderFallback(config) : null} {...newProps}/>
                )
            }
        }

        // 没被注册的组件
        return props.renderNotFound ? props.renderNotFound(config) : <NotFound key={key} name={config.name} />
    }

    return (
        <div className={props.className} style={props.style}>
            {
                props.schema.map((info, index) => renderItem(info, index))
            }
        </div>
    )
}

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
