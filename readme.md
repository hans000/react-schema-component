# React Schema Component

## Playground

try it on [playground](https://hans000.github.io/react-schema-component/)

## Usage

```
import SchemaComponent, { register } from 'react-schema-component'
import { antdLoader, antdMap, antdProLoader, antdProMap } from "react-schema-component/config";
import { ErrorBoundary } from "@ant-design/pro-components";

defineConfig({
    componentMap: {
        ...antdMap,
        ...antdProMap,
        CustomComp1: React.lazy(() => import('./CustomComp1')),
        CustomComp2: React.lazy(() => import('./CustomComp2')),
    },
    loaders: [
        antdLoader,
        antdProLoader,
    ],
    ErrorBoundary,
})

const schema = JSON.parse(JSON.stringify([
    {
        name: 'input',
        props: {
            value: '{{ "count: " + count }}'
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
]))

function App() {
    const [count, setCount] = useState(0)
    return (
        <SchemaComponent context={{ count }} schema={schema}/>
    )
}
```

## API

|Name|Type|Description|
|--|--|--|
|schema|any[]|
|context|object|
|style|CSSProperties|
|className|string||
|renderNotFound|(config) => ReactNode|
|renderFallback|(config) => ReactNode|

## License
[MIT](./LICENSE)