/** @description 组件通信 -- props 和 callback */

import { useState } from 'react'

import s from './style.module.scss'

/** @description 父组件 */
const Father: React.FC = () => {
  const [fatherMessage, setFatherMessage] = useState('father message')
  const [childMessage, setChildMessage] = useState('child message')

  return (
    <div className={s.container}>
      <section className={s.parent}>
        <h3>这里是父组件</h3>
        <p>子组件传递给父组件的 message: {fatherMessage}</p>
        <input
          type="text"
          placeholder="我想传消息给子组件..."
          onChange={(e) => setChildMessage(e.target.value)}
        />
      </section>

      <Child
        childMessage={childMessage}
        onChangeFatherMessage={(fatherMessage) =>
          setFatherMessage(fatherMessage)
        }
      />
    </div>
  )
}

/** @description 子组件 */
interface ChildProps {
  childMessage: string
  onChangeFatherMessage: (fatherMessage: string) => void
}
const Child: React.FC<ChildProps> = ({
  childMessage,
  onChangeFatherMessage,
}) => {
  return (
    <section className={s.child}>
      <h3>这里是子组件</h3>
      <p>父组件传递给子组件的 message: {childMessage}</p>
      <input
        type="text"
        placeholder="我想传消息给父组件..."
        onChange={(e) => onChangeFatherMessage(e.target.value)}
      />
    </section>
  )
}

export { Father }
