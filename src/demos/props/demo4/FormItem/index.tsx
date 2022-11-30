import React from 'react'

import type { InputProps } from '../Input'

import s from './style.module.scss'

type FormItemProps = React.PropsWithChildren<{
  name: string
  value?: string
  label?: string

  onChange?: (key: string, value: string) => void
}>
const FormItem: React.FC<FormItemProps> = (props) => {
  const { name, value, label, children } = props
  const { onChange: emitChange } = props

  const handleChange = (value: string) => {
    emitChange && emitChange(name, value)
  }

  return (
    <div className={s.formItem}>
      <label htmlFor={name}>{label}</label>
      {React.isValidElement(children) &&
      (children.type as React.FC).displayName === 'Input'
        ? // 隐式注入 Input 需要的 prop
          React.cloneElement<InputProps>(children as React.ReactElement, {
            value,
            onChange: handleChange,
          })
        : ''}
    </div>
  )
}

// 起到标识作用 用于父组件条件渲染插槽时使用
FormItem.displayName = 'FormItem'

export type { FormItemProps }
export { FormItem }
