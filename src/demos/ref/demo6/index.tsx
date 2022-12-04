/** @description 使用 ref 完成组件通信 -- 类组件 */

import React, { forwardRef, useImperativeHandle, useRef, useState } from 'react'

import s from './style.module.scss'

interface ChildRef {
  setFatherToChildMessage: (message: string) => void
}

/**
 * 父 -> 子 使用 ref
 * 子 -> 父 使用 props 回调
 */
const CommunicationDemoFunctionComponentFather: React.FC = () => {
  const [fatherToChildMessage, setFatherToChildMessage] = useState('')
  const [childToFatherMessage, setChildToFatherMessage] = useState('')

  const childRef = useRef<ChildRef>(null)

  return (
    <div className={s.father}>
      <h3>父组件</h3>
      <p>子组件对我说：{childToFatherMessage}</p>
      <div className={s.messageInputBox}>
        <section>
          <label htmlFor="to-father">我对子组件说：</label>
          <input
            type="text"
            id="to-child"
            onChange={(e) => setFatherToChildMessage(e.target.value)}
          />
        </section>

        {/* 父 -> 子 -- 使用 ref 完成组件通信 */}
        <button
          onClick={() =>
            childRef.current?.setFatherToChildMessage(fatherToChildMessage)
          }
        >
          发送
        </button>
      </div>

      <CommunicationDemoFunctionComponentChild
        ref={childRef}
        onChildToFather={(message) => setChildToFatherMessage(message)}
      />
    </div>
  )
}

interface CommunicationDemoFunctionComponentChildProps {
  onChildToFather: (message: string) => void
}
const CommunicationDemoFunctionComponentChild = forwardRef<
  ChildRef,
  CommunicationDemoFunctionComponentChildProps
>((props, ref) => {
  const { onChildToFather: emitChildToFather } = props

  // 子组件自己维护状态 不依赖于父组件 props
  const [fatherToChildMessage, setFatherToChildMessage] = useState('')
  const [childToFatherMessage, setChildToFatherMessage] = useState('')

  // 定义暴露给外界的 API
  useImperativeHandle(ref, () => ({ setFatherToChildMessage }))

  return (
    <div className={s.child}>
      <h3>子组件</h3>
      <p>父组件对我说：{fatherToChildMessage}</p>
      <div className={s.messageInputBox}>
        <section>
          <label htmlFor="to-father">我对父组件说：</label>
          <input
            type="text"
            id="to-father"
            onChange={(e) => setChildToFatherMessage(e.target.value)}
          />
        </section>

        {/* 子 -> 父 -- 使用 props 回调完成组件通信 */}
        <button onClick={() => emitChildToFather(childToFatherMessage)}>
          发送
        </button>
      </div>
    </div>
  )
})

export { CommunicationDemoFunctionComponentFather }
