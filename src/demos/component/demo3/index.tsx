/** @description 组件通信 -- event bus */

import { useEffect, useState } from 'react'

import mitt from 'mitt'

import s from './style.module.scss'

// emitter 支持的事件类型定义
type EventType = {
  changeFatherMessage: { fatherMessage: string }
  changeChildMessage: { childMessage: string }
}
const emitter = mitt<EventType>()

/** @description 父组件 */
const Father: React.FC = () => {
  const [fatherMessage, setFatherMessage] = useState('')

  // 副作用 -- 绑定事件并在组件销毁时解绑
  useEffect(() => {
    emitter.on('changeFatherMessage', ({ fatherMessage }) => {
      setFatherMessage(fatherMessage)
    })

    return () => {
      emitter.off('changeFatherMessage')
    }
  }, [])

  return (
    <div className={s.container}>
      <section className={s.parent}>
        <h3>这里是父组件</h3>
        <p>子组件传递给父组件的 message: {fatherMessage}</p>
        <input
          type="text"
          placeholder="我想传消息给子组件..."
          onChange={(e) =>
            emitter.emit('changeChildMessage', {
              childMessage: e.target.value,
            })
          }
        />
      </section>

      <Child />
    </div>
  )
}

/** @description 子组件 */
const Child: React.FC = () => {
  const [childMessage, setChildMessage] = useState('')

  // 副作用 -- 绑定事件并在组件销毁时解绑
  useEffect(() => {
    // 监听父组件通过 event bus 传递给子组件的消息
    emitter.on('changeChildMessage', ({ childMessage }) =>
      setChildMessage(childMessage),
    )

    return () => {
      emitter.off('changeChildMessage')
    }
  }, [])

  return (
    <section className={s.child}>
      <h3>这里是子组件</h3>
      <p>父组件传递给子组件的 message: {childMessage}</p>
      <input
        type="text"
        placeholder="我想传消息给父组件..."
        onChange={(e) =>
          emitter.emit('changeFatherMessage', {
            fatherMessage: e.target.value,
          })
        }
      />
    </section>
  )
}

export { Father }
