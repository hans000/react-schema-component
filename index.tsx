import React, { Suspense } from "react"
import { compileExpression, getComponent, isVanillaElement } from "./utils"

interface SchemaComponentProps {
    name: string
    props?: Record<string, any>
}

let __map = {}

export function registerComponents(map: Record<string, React.LazyExoticComponent<any> | React.FC<any>>) {
    Object.assign(__map, map)
}

export default function SchemaComponent(props: {
    schema: SchemaComponentProps[]
    context?: Record<string, any>
    style?: React.CSSProperties
    className?: string
    renderNotFound?: (config: any) => React.ReactNode
    fallback?: React.ReactNode
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


        return <Comp key={key} {...newProps} />
    }

    return (
        <div className={props.className} style={props.style}>
            <Suspense fallback={props.fallback ? props.fallback : <span>loading</span>}>
                {
                    props.schema.map((info, index) => renderItem(info, index))
                }
            </Suspense>
        </div>
    )
}