/** @description 实战 -- 实现简单的 Form 和 FormItem 组件 */

import React, { forwardRef, ReactElement, useEffect, useState } from 'react'

import s from './style.module.scss'

const PropsPracticalDemo: React.FC = () => {
  return (
    <div className={s.container}>
      {/* 表单区 */}
      <section className={s.form}>
        <Form>
          <div>I will be ignored.</div>
          <FormItem name="username" />
          <FormItem name="password" />
        </Form>

        <section className={s.buttonGroup}>
          <button>提交</button>
          <button>重置</button>
        </section>
      </section>

      {/* 表单内容展示区 */}
      <section className={s.formDisplay}>
        <p>username: plasticine</p>
        <p>password: 123123</p>
      </section>
    </div>
  )
}

type FormData = Record<string, string | number | boolean>
const Form: React.FC<any> = forwardRef((props, ref) => {
  const [formData, setFormData] = useState<FormData>({})

  // jiasdasdasd

  const submitForm = (onFormSubmit: (formData: FormData) => void) => {
    onFormSubmit(formData)
  }

  const resetForm = () => {
    setFormData((oldFormData) => {
      const initialFormData: FormData = {}

      for (const key of Object.keys(oldFormData)) {
        initialFormData[key] = ''
      }

      return initialFormData
    })
  }

  const handleChange = (key: string, value: string) => {
    setFormData((oldFormData) => {
      const clonedFormData = { ...oldFormData }
      clonedFormData[key] = value

      return clonedFormData
    })
  }

  const children: ReactElement[] = []
  React.Children.forEach(props.children, (child) => {
    if (child.type.name === 'FormItem') {
      const { name } = child.props

      // 隐式注入 props
      const Child = React.cloneElement(
        child,
        {
          key: name,
          value: formData[name] || '',
          label: name,
          onChange: handleChange,
        },
        child.props.children,
      )

      children.push(Child)
    }
  })

  return <div>{children}</div>
})

interface FormItemProps {
  name: string
  value?: string
  label?: string

  onChange?: (key: string, value: string) => void
}
const FormItem: React.FC<FormItemProps> = (props) => {
  const { name, value, label } = props
  const { onChange: emitChange = () => {} } = props

  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <input
        type="text"
        id={name}
        name={name}
        value={value}
        onChange={(e) => emitChange(name, e.target.value)}
      />
    </div>
  )
}

export { PropsPracticalDemo }
