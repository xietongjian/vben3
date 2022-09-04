import type { VNode } from 'vue'
export interface VbenFormProps {
  // api?: Function
  // params?: Object
  title?: string
  // afterFetch?: Function
  schemas: VbenFormSchema[]
}

export interface VbenFormSchema {
  // Field name
  field: string
  // Event name triggered by internal value change, default change
  changeEvent?: string
  // Variable name bound to v-model Default value
  valueField?: string
  // Label name
  label: string | VNode
  // Auxiliary text
  subLabel?: string
  // Help text on the right side of the text
  // helpMessage?:
  //   | string
  //   | string[]
  //   | ((renderCallbackParams: RenderCallbackParams) => string | string[])
  // // BaseHelp component props
  // helpComponentProps?: Partial<HelpComponentProps>
  // // Label width, if it is passed, the labelCol and WrapperCol configured by itemProps will be invalid
  // labelWidth?: string | number
  // // Disable the adjustment of labelWidth with global settings of formModel, and manually set labelCol and wrapperCol by yourself
  // disabledLabelWidth?: boolean
  // 表单组件
  component: ComponentType
  // 组件参数
  componentProps?: object
  // | ((opt: {
  //     schema: FormSchema
  //     tableAction: TableActionType
  //     formActionType: FormActionType
  //     formModel: Recordable
  //   }) => Recordable)
  // | object
  // Required
  // required?: boolean | ((renderCallbackParams: RenderCallbackParams) => boolean)
  //
  // suffix?: string | number | ((values: RenderCallbackParams) => string | number)
  //
  // // Validation rules
  // rules?: Rule[]
  // // Check whether the information is added to the label
  // rulesMessageJoinLabel?: boolean
  //
  // // Reference formModelItem
  // itemProps?: Partial<FormItem>
  //
  // // col configuration outside formModelItem
  // colProps?: Partial<ColEx>
  //
  // // 默认值
  // defaultValue?: any
  // isAdvanced?: boolean
  //
  // // Matching details components
  // span?: number
  //
  // ifShow?: boolean | ((renderCallbackParams: RenderCallbackParams) => boolean)
  //
  // show?: boolean | ((renderCallbackParams: RenderCallbackParams) => boolean)
  //
  // // Render the content in the form-item tag
  // render?: (
  //   renderCallbackParams: RenderCallbackParams,
  // ) => VNode | VNode[] | string
  //
  // // Rendering col content requires outer wrapper form-item
  // renderColContent?: (
  //   renderCallbackParams: RenderCallbackParams,
  // ) => VNode | VNode[] | string
  //
  // renderComponentContent?:
  //   | ((renderCallbackParams: RenderCallbackParams) => any)
  //   | VNode
  //   | VNode[]
  //   | string
  //
  // // Custom slot, in from-item
  // slot?: string
  //
  // // Custom slot, similar to renderColContent
  // colSlot?: string
  //
  // dynamicDisabled?:
  //   | boolean
  //   | ((renderCallbackParams: RenderCallbackParams) => boolean)
  //
  // dynamicRules?: (renderCallbackParams: RenderCallbackParams) => Rule[]
}
export type ComponentType =
  | 'Input'
  | 'InputGroup'
  | 'InputPassword'
  | 'InputSearch'
  | 'InputTextArea'
  | 'InputNumber'
  | 'InputCountDown'
  | 'Select'
  // | 'ApiSelect'
  | 'TreeSelect'
  | 'ApiTree'
  // | 'ApiTreeSelect'
  // | 'ApiRadioGroup'
  // | 'RadioButtonGroup'
  | 'RadioGroup'
  // | 'Checkbox'
  | 'CheckboxGroup'
  | 'AutoComplete'
  // | 'ApiCascader'
  | 'Cascader'
  | 'DatePicker'
  | 'MonthPicker'
  | 'RangePicker'
  | 'WeekPicker'
  | 'TimePicker'
  | 'Switch'
  | 'StrengthMeter'
  | 'Upload'
  | 'IconPicker'
  | 'Render'
  | 'Slider'
  | 'Rate'
  | 'Divider'