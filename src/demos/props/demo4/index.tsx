/** @description 实战 -- 实现简单的 Form 和 FormItem 组件 */

import React, { useRef } from 'react'

import { createLoggerWithScope } from '~/utils'

import { Form, FormInstance } from './Form'
import { FormItem } from './FormItem'
import { Input } from './Input'

import s from './style.module.scss'

const logger = createLoggerWithScope('PropsPracticalDemo')

const PropsPracticalDemo: React.FC = () => {
  const formRef = useRef<FormInstance>(null)

  /** @description 提交表单 */
  const submit = () => {
    formRef.current?.submit((formData) => {
      logger.log(formData)
    })
  }

  /** @description 重置表单 */
  const reset = () => {
    formRef.current?.reset()
  }

  /** @description 生成表单模板数据 */
  const generateFormData = () => {
    formRef.current?.setFormItemValue('username', 'plasticine')
    formRef.current?.setFormItemValue('password', '123456')
  }

  return (
    <div className={s.container}>
      <Form ref={formRef}>
        <div>I will be ignored.</div>
        <FormItem name="username">
          <Input />
        </FormItem>

        <FormItem name="password">
          <Input />
        </FormItem>

        <FormItem name="ignored">
          <div>I will be ignored.</div>
        </FormItem>
      </Form>

      <section className={s.buttonGroup}>
        <button onClick={() => submit()}>提交</button>
        <button onClick={() => reset()}>重置</button>
        <button onClick={() => generateFormData()}>生成表单模板数据</button>
      </section>
    </div>
  )
}

export { PropsPracticalDemo }
