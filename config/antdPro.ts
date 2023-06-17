import { lazy } from 'react';
import { LoaderProps } from '../core/components/Wrapper';
import { splitComponentName } from '../core/utils';

export const map: Record<string, React.FC<any>> = {
    ProCard: lazy(() => import('@ant-design/pro-components').then(res => ({ default: res.ProCard }))),
    ProDescriptions: lazy(() => import('@ant-design/pro-components').then(res => ({ default: res.ProDescriptions }))),
    ProForm: lazy(() => import('@ant-design/pro-components').then(res => ({ default: res.ProForm }))),
    ProTable: lazy(() => import('@ant-design/pro-components').then(res => ({ default: res.ProTable }))),
    EditableProTable: lazy(() => import('@ant-design/pro-components').then(res => ({ default: res.EditableProTable }))),
    ProFormCaptcha: lazy(() => import('@ant-design/pro-components').then(res => ({ default: res.ProFormCaptcha }))),
    ProFormCascader: lazy(() => import('@ant-design/pro-components').then(res => ({ default: res.ProFormCascader }))),
    ProFormCheckbox: lazy(() => import('@ant-design/pro-components').then(res => ({ default: res.ProFormCheckbox }))),
    ProFormColorPicker: lazy(() => import('@ant-design/pro-components').then(res => ({ default: res.ProFormColorPicker }))),
    ProFormDateMonthRangePicker: lazy(() => import('@ant-design/pro-components').then(res => ({ default: res.ProFormDateMonthRangePicker }))),
    ProFormDatePicker: lazy(() => import('@ant-design/pro-components').then(res => ({ default: res.ProFormDatePicker }))),
    ProFormDateQuarterRangePicker: lazy(() => import('@ant-design/pro-components').then(res => ({ default: res.ProFormDateQuarterRangePicker }))),
    ProFormDateRangePicker: lazy(() => import('@ant-design/pro-components').then(res => ({ default: res.ProFormDateRangePicker }))),
    ProFormDateTimePicker: lazy(() => import('@ant-design/pro-components').then(res => ({ default: res.ProFormDateTimePicker }))),
    ProFormDateTimeRangePicker: lazy(() => import('@ant-design/pro-components').then(res => ({ default: res.ProFormDateTimeRangePicker }))),
    ProFormDateWeekRangePicker: lazy(() => import('@ant-design/pro-components').then(res => ({ default: res.ProFormDateWeekRangePicker }))),
    ProFormDateYearRangePicker: lazy(() => import('@ant-design/pro-components').then(res => ({ default: res.ProFormDateYearRangePicker }))),
    ProFormDependency: lazy(() => import('@ant-design/pro-components').then(res => ({ default: res.ProFormDependency }))),
    ProFormDigit: lazy(() => import('@ant-design/pro-components').then(res => ({ default: res.ProFormDigit }))),
    ProFormDigitRange: lazy(() => import('@ant-design/pro-components').then(res => ({ default: res.ProFormDigitRange }))),
    ProFormField: lazy(() => import('@ant-design/pro-components').then(res => ({ default: res.ProFormField }))),
    ProFormFieldSet: lazy(() => import('@ant-design/pro-components').then(res => ({ default: res.ProFormFieldSet }))),
    ProFormItem: lazy(() => import('@ant-design/pro-components').then(res => ({ default: res.ProFormItem }))),
    Group: lazy(() => import('@ant-design/pro-components').then(res => ({ default: res.Group }))),
    ProFormList: lazy(() => import('@ant-design/pro-components').then(res => ({ default: res.ProFormList }))),
    ProFormMoney: lazy(() => import('@ant-design/pro-components').then(res => ({ default: res.ProFormMoney }))),
    ProFormRadio: lazy(() => import('@ant-design/pro-components').then(res => ({ default: res.ProFormRadio }))),
    ProFormRate: lazy(() => import('@ant-design/pro-components').then(res => ({ default: res.ProFormRate }))),
    BetaSchemaForm: lazy(() => import('@ant-design/pro-components').then(res => ({ default: res.BetaSchemaForm }))),
    ProFormSegmented: lazy(() => import('@ant-design/pro-components').then(res => ({ default: res.ProFormSegmented }))),
    ProFormSelect: lazy(() => import('@ant-design/pro-components').then(res => ({ default: res.ProFormSelect }))),
    ProFormSlider: lazy(() => import('@ant-design/pro-components').then(res => ({ default: res.ProFormSlider }))),
    Submitter: lazy(() => import('@ant-design/pro-components').then(res => ({ default: res.Submitter }))),
    ProFormSwitch: lazy(() => import('@ant-design/pro-components').then(res => ({ default: res.ProFormSwitch }))),
    ProFormText: lazy(() => import('@ant-design/pro-components').then(res => ({ default: res.ProFormText }))),
    ProFormTextArea: lazy(() => import('@ant-design/pro-components').then(res => ({ default: res.ProFormTextArea }))),
    ProFormTimePicker: lazy(() => import('@ant-design/pro-components').then(res => ({ default: res.ProFormTimePicker }))),
    ProFormTreeSelect: lazy(() => import('@ant-design/pro-components').then(res => ({ default: res.ProFormTreeSelect }))),
    ProFormUploadButton: lazy(() => import('@ant-design/pro-components').then(res => ({ default: res.ProFormUploadButton }))),
    ProFormUploadDragger: lazy(() => import('@ant-design/pro-components').then(res => ({ default: res.ProFormUploadDragger }))),
}

export const loader: LoaderProps = {
    predicate(name) {
        const [main] = splitComponentName(name)
        return Object.keys(map).includes(main)
    },
    render(name) {
        const [main, sub] = splitComponentName(name)
        
        return lazy(() => import('@ant-design/pro-components').then(res => {
            return {
                default: (sub ? (res[main] as any)[sub] : res[main]) as React.ComponentType,
            }
        }))
    },
}