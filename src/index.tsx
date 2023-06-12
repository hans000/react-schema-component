import React, { Suspense, createElement } from "react"
import { Alert } from "antd"
import { compileExpression, getComponent, isVanillaElement } from "./utils"
import antd from "./config/antd"
import antdPro from "./config/antdPro"

interface SchemaComponentProps {
    name: string
    props?: Record<string, any>
}

const componentMap = {
    ...antd,
    ...antdPro,
}

export default function SchemaComponent(props: {
    schema: SchemaComponentProps[]
    context?: Record<string, any>
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
        const Comp = getComponent(config.name, componentMap)
        const componentProps = config.props || {}
        const newProps = handleProps(componentProps)

        if (isVanillaElement(config.name)) {
            return React.createElement(config.name, )
        }

        if (!Comp) {
            return <Alert showIcon description={`${config.component} cannot found`} key={key} type="error" />
        }


        return <Comp key={key} {...newProps} />
    }

    return (
        <div className={props.className} style={props.style}>
            <Suspense fallback={<span>loading</span>}>
                {
                    props.schema.map((info, index) => renderItem(info, index))
                }
            </Suspense>
        </div>
    )
}