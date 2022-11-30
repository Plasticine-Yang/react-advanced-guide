import React, {
  forwardRef,
  ReactElement,
  useImperativeHandle,
  useState,
} from 'react'

import type { FormItemProps } from '../FormItem'

import s from './style.module.scss'

type FormData = Record<string, string>

interface FormInstance {
  /** @description 设置表单项的值 */
  setFormItemValue: (key: string, value: string) => void

  /** @description 提交表单 */
  submit: (handleFormSubmit: (formData: FormData) => void) => void

  /** @description 重置表单 */
  reset: () => void
}

const Form: React.FC<any> = forwardRef<FormInstance, React.PropsWithChildren>(
  (props, ref) => {
    const [formData, setFormData] = useState<FormData>({})

    /** @description 通过 ref 获取的组件实例 */
    const formInstance: FormInstance = {
      setFormItemValue(key, value) {
        setFormData((formData) => ({
          ...formData,
          [key]: value,
        }))
      },

      submit(handleFormSubmit) {
        handleFormSubmit(formData)
      },

      reset() {
        setFormData((oldFormData) => {
          const initialFormData: FormData = {}

          for (const key of Object.keys(oldFormData)) {
            initialFormData[key] = ''
          }

          return initialFormData
        })
      },
    }

    // 通过 useImperativeHandle 将指定的属性和方法暴露给外界
    useImperativeHandle(ref, () => formInstance)

    const handleChange = (key: string, value: string) => {
      setFormData((oldFormData) => {
        const clonedFormData = { ...oldFormData }
        clonedFormData[key] = value

        return clonedFormData
      })
    }

    const children: ReactElement[] = []
    React.Children.forEach(props.children, (child) => {
      if (
        React.isValidElement(child) &&
        (child.type as React.FC).displayName === 'FormItem'
      ) {
        const { name } = child.props

        // 隐式注入 props
        const Child = React.cloneElement<FormItemProps>(
          child as React.ReactElement,
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

    return <div className={s.form}>{children}</div>
  },
)

export type { FormData, FormInstance }
export { Form }
