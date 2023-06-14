# React Schema Component

### Playground

try it by [playground](https://hans000.github.io/react-schema-component/)

## Usage

```
import SchemaComponent, { register } from 'react-schema-component'
import { antd, antdPro } from 'react-schema-component/config'

register({
    ...antd,
    ...antdPro,
    CustomComp1: React.lazy(() => import('./CustomComp1')),
    CustomComp2: React.lazy(() => import('./CustomComp2')),
})

function App() {
    const [count, setCount] = useState(0)
    return (
        <SchemaComponent context={{
            count
        }} schema={[
            {
                name: 'input',
                props: {
                    value: '{{ "count: " + $context.count }}'
                }
            },
            {
                name: 'Card',
                props: {
                    title: 'card title',
                    $children: [
                            {
                                name: 'Alert',
                                props: {
                                    description: 'it can be look as react component with $'
                                }
                            }
                        ]
                }
            },
            {
                name: 'CustomComp1',
                props: {
                }
            },
        ]}/>
    )
}
```

### API

|Name|Type|Description|
|--|--|--|
|schema|any[]|
|context|object|
|style|CSSProperties|
|className|string||
|renderNotFound|(config) => ReactNode|
|renderFallback|(config) => ReactNode|