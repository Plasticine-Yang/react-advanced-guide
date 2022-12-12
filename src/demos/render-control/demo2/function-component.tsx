/** @description 父组件更新渲染引起子组件的不必要更新渲染 -- 函数组件 */

import { useEffect, useMemo, useState } from 'react'
import { createLoggerWithScope } from '~/utils'
import s from './style.module.scss'

const logger = createLoggerWithScope('RenderControlDemo2FunctionComponent')

const RenderControlDemo2FunctionComponent: React.FC = () => {
  const [counter, setCounter] = useState(0)
  const [childCounter, setChildCounter] = useState(0)

  useEffect(() => {
    logger.log('父组件更新渲染')
  })

  return (
    <div className={s.parent}>
      <p>父组件: {counter}</p>

      {useMemo(
        () => (
          <Child counter={childCounter} />
        ),
        [childCounter],
      )}

      <div className={s.btnGroup}>
        <button onClick={() => setCounter(counter + 1)}>add counter</button>
        <button onClick={() => setChildCounter(childCounter + 1)}>
          add childCounter
        </button>
      </div>
    </div>
  )
}

interface ChildProps {
  counter: number
}
const Child: React.FC<ChildProps> = (props) => {
  const { counter } = props

  useEffect(() => {
    logger.log('子组件更新渲染')
  })

  return (
    <div className={s.child}>
      <p>子组件: {counter}</p>
    </div>
  )
}

export { RenderControlDemo2FunctionComponent }
