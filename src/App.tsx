import { Alert, Card, Col, Row } from "antd";
import Editor from '@monaco-editor/react'
import { useMemo, useState } from "react";
import SchemaComponent, { registerComponents } from "..";
import { antd, antdPro } from "../config";

registerComponents({
    ...antd,
    ...antdPro,
})

const raw = JSON.stringify([
    {
        name: "input",
        props: {
            placeholder: "请输入",
            style: {
                marginBottom: 24
            }
        }
    },
    {
        name: "Input",
        props: {
            placeholder: "请输入",
            style: {
                marginBottom: 24
            }
        }
    },
    {
        name: "ProFormText",
        props: {
            placeholder: "请输入",
            style: {
                marginBottom: 24
            }
        }
    },
    {
        name: "Button.Group",
        props: {
            $children: [
                {
                    name: "Button",
                    props: {
                        children: "Submit"
                    }
                },
                {
                    name: "Button",
                    props: {
                        children: "Reset"
                    }
                }
            ],
            style: {
                marginBottom: 24
            }
        }
    },
    {
        name: "Card",
        props: {
            tabList: [
                {
                    key: "tab1",
                    tab: "tab1"
                },
                {
                    key: "tab2",
                    tab: "tab2"
                }
            ]
        }
    },
    {
        name: "ProTable",
        props: {
            columns: [
                {
                    dataIndex: 'name',
                    title: '名称'
                },
                {
                    dataIndex: 'age',
                    title: '年龄'
                },
                {
                    dataIndex: 'email',
                    title: '邮箱'
                },
            ],
            rowKey: 'name',
            dataSource: [
                {
                    name: 'Jack',
                    age: 15,
                    email: 'Jack@124.com'
                }
            ]
        }
    }
], null, 4)

export default function App() {
    const [value, setValue] = useState(raw)
    const [schema, setSchema] = useState([])
    const [errorText, setErrorText] = useState('')

    useMemo(() => {
        try {
            setErrorText('')
            setSchema(JSON.parse(value))
        } catch (error) {
            setErrorText(error + '')
        }
    }, [value])

    return (
        <Row>
            <Col span={12} style={{ padding: 8, backgroundColor: '#eee' }}>
                <Card style={{ marginBottom: 12 }}>
                    <SchemaComponent schema={schema} />
                </Card>
                {errorText && <Alert showIcon type="error" description={errorText} />}
            </Col>
            <Col span={12}>
                <div style={{ height: '100vh' }}>
                    <Editor theme="vs-dark" language={'json'} value={value} onChange={(v) => setValue(v)} />
                </div>
            </Col>
        </Row>
    )
}