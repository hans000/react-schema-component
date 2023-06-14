export function compileExpression(raw: any, context: Record<string, any>) {
    const match = matchExpression(raw)
    if (match === null) {
        return raw
    }
    try {
        const expression = match[1]
        const handle = new Function('c', `const $context = c;return ${expression}`)
        return handle(context)
    } catch (error) {
        console.error(error)
        return null
    }
}

export function matchExpression(raw: string | undefined) {
    return typeof raw === 'string' ? raw.match(/^\s*\{\{(.+)\}\}\s*$/) : null
}

export function getComponent(componentName: string | undefined, componentMap: Record<string, React.FC<any>>) {
    if (! componentName) {
        return
    }
    const dataIndex = componentName.split('.')
    let result;
    while (dataIndex.length) {
        const segment = dataIndex.pop()!
        result = componentMap[segment]
    }
    return result
}

const vanillaElements = ['a',
'abbr',
'address',
'area',
'article',
'aside',
'audio',
'b',
'base',
'bdi',
'bdo',
'big',
'blockquote',
'body',
'br',
'button',
'canvas',
'caption',
'center',
'cite',
'code',
'col',
'colgroup',
'data',
'datalist',
'dd',
'del',
'details',
'dfn',
'dialog',
'div',
'dl',
'dt',
'em',
'embed',
'fieldset',
'figcaption',
'figure',
'footer',
'form',
'h1',
'h2',
'h3',
'h4',
'h5',
'h6',
'head',
'header',
'hgroup',
'hr',
'html',
'i',
'iframe',
'img',
'input',
'ins',
'kbd',
'keygen',
'label',
'legend',
'li',
'link',
'main',
'map',
'mark',
'menu',
'menuitem',
'meta',
'meter',
'nav',
'noindex',
'noscript',
'object',
'ol',
'optgroup',
'option',
'output',
'p',
'param',
'picture',
'pre',
'progress',
'q',
'rp',
'rt',
'ruby',
's',
'samp',
'slot',
'script',
'section',
'select',
'small',
'source',
'span',
'strong',
'style',
'sub',
'summary',
'sup',
'table',
'template',
'tbody',
'td',
'textarea',
'tfoot',
'th',
'thead',
'time',
'title',
'tr',
'track',
'u',
'ul',
'video',
'wbr',
'webview'] as const

export type VanillaElementType = typeof vanillaElements[number]

export function isVanillaElement(name: string) {
    return vanillaElements.includes(name as any)
}