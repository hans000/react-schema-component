import React, { lazy } from 'react'
import { LoaderProps } from '../core/components/Wrapper'
import { splitComponentName } from '../core/utils'

export const map: Record<string, React.FC<any>> = {
    Affix: lazy(() => import('antd/es/affix')),
    Alert: lazy(() => import('antd/es/alert')),
    Anchor: lazy(() => import('antd/es/anchor')),
    App: lazy(() => import('antd/es/app')),
    AutoComplete: lazy(() => import('antd/es/auto-complete')),
    Avatar: lazy(() => import('antd/es/avatar')),
    BackTop: lazy(() => import('antd/es/back-top')),
    Badge: lazy(() => import('antd/es/badge')),
    Breadcrumb: lazy(() => import('antd/es/breadcrumb')),
    Button: lazy(() => import('antd/es/button')),
    Calendar: lazy(() => import('antd/es/calendar')),
    Card: lazy(() => import('antd/es/card')),
    Carousel: lazy(() => import('antd/es/carousel')),
    Cascader: lazy(() => import('antd/es/cascader')),
    Checkbox: lazy(() => import('antd/es/checkbox')),
    Col: lazy(() => import('antd/es/col')),
    Collapse: lazy(() => import('antd/es/collapse')),
    ColorPicker: lazy(() => import('antd/es/color-picker')),
    ConfigProvider: lazy(() => import('antd/es/config-provider')),
    DatePicker: lazy(() => import('antd/es/date-picker')),
    Descriptions: lazy(() => import('antd/es/descriptions')),
    Divider: lazy(() => import('antd/es/divider')),
    Drawer: lazy(() => import('antd/es/drawer')),
    Dropdown: lazy(() => import('antd/es/dropdown')),
    Empty: lazy(() => import('antd/es/empty')),
    FloatButton: lazy(() => import('antd/es/float-button')),
    Form: lazy(() => import('antd/es/form')),
    Image: lazy(() => import('antd/es/image')),
    Input: lazy(() => import('antd/es/input')),
    InputNumber: lazy(() => import('antd/es/input-number')),
    Layout: lazy(() => import('antd/es/layout')),
    List: lazy(() => import('antd/es/list')),
    Mentions: lazy(() => import('antd/es/mentions')),
    Menu: lazy(() => import('antd/es/menu')),
    Modal: lazy(() => import('antd/es/modal')),
    Pagination: lazy(() => import('antd/es/pagination')),
    Popconfirm: lazy(() => import('antd/es/popconfirm')),
    Popover: lazy(() => import('antd/es/popover')),
    Progress: lazy(() => import('antd/es/progress')),
    QRCode: lazy(() => import('antd/es/qrcode')),
    Radio: lazy(() => import('antd/es/radio')),
    Rate: lazy(() => import('antd/es/rate')),
    Result: lazy(() => import('antd/es/result')),
    Row: lazy(() => import('antd/es/row')),
    Segmented: lazy(() => import('antd/es/segmented')),
    Select: lazy(() => import('antd/es/select')),
    Skeleton: lazy(() => import('antd/es/skeleton')),
    Slider: lazy(() => import('antd/es/slider')),
    Space: lazy(() => import('antd/es/space')),
    Spin: lazy(() => import('antd/es/spin')),
    Statistic: lazy(() => import('antd/es/statistic')),
    Steps: lazy(() => import('antd/es/steps')),
    Switch: lazy(() => import('antd/es/switch')),
    Table: lazy(() => import('antd/es/table')),
    Tabs: lazy(() => import('antd/es/tabs')),
    Tag: lazy(() => import('antd/es/tag')),
    TimePicker: lazy(() => import('antd/es/time-picker')),
    Timeline: lazy(() => import('antd/es/timeline')),
    Tooltip: lazy(() => import('antd/es/tooltip')),
    Tour: lazy(() => import('antd/es/tour')),
    Transfer: lazy(() => import('antd/es/transfer')),
    Tree: lazy(() => import('antd/es/tree')),
    TreeSelect: lazy(() => import('antd/es/tree-select')),
    Typography: lazy(() => import('antd/es/typography')),
    Upload: lazy(() => import('antd/es/upload')),
    Watermark: lazy(() => import('antd/es/watermark')),
}

export const loader: LoaderProps = {
    predicate(name) {
        const [main] = splitComponentName(name)
        return Object.keys(map).includes(main)
    },
    render(name) {
        const [main, sub] = splitComponentName(name)
        return lazy(() => import('antd').then(res => {
            return {
                default: (sub ? (res[main] as any)[sub] : res[main]) as React.ComponentType,
            }
        }))
    },
}