/** @description 父组件更新渲染引起子组件的不必要更新渲染 -- 函数组件 */

import { useEffect, useState } from 'react'
import { createLoggerWithScope } from '~/utils'
import s from './style.module.scss'

const logger = createLoggerWithScope('RenderControlDemo1FunctionComponent')

const RenderControlDemo1FunctionComponent: React.FC = () => {
  const [counter, setCounter] = useState(0)

  useEffect(() => {
    logger.log('父组件更新渲染')
  })

  return (
    <div className={s.parent}>
      <p>父组件: {counter}</p>

      <Child />

      <button onClick={() => setCounter(counter + 1)}>add count</button>
    </div>
  )
}

const Child: React.FC = () => {
  useEffect(() => {
    logger.log('子组件更新渲染')
  })

  return (
    <div className={s.child}>
      <p>子组件</p>
    </div>
  )
}

export { RenderControlDemo1FunctionComponent }
