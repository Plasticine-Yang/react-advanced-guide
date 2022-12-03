/** @description 在函数组件中模拟类组件生命周期 */

import { useEffect, useState } from 'react'

import { createLoggerWithScope } from '~/utils'

const logger = createLoggerWithScope('FunctionComponentLifeCycleDemo')

const FunctionComponentLifeCycleDemo: React.FC = () => {
  // 控制组件是否挂载和卸载
  const [shouldRender, setShouldRender] = useState(true)
  // 作为子组件 props
  const [counter, setCounter] = useState(0)

  return (
    <div>
      {shouldRender && <FunctionComponentLifeCycle counter={counter} />}
      <button onClick={() => setCounter((counter) => counter + 1)}>
        add counter
      </button>

      <button onClick={() => setShouldRender(false)}>卸载销毁组件</button>
    </div>
  )
}

interface FunctionComponentLifeCycleProps {
  counter: number
}
const FunctionComponentLifeCycle: React.FC<FunctionComponentLifeCycleProps> = (
  props,
) => {
  const [stateCounter, setStateCounter] = useState(0)

  // 模拟类组件 componentDidMount 和 componentWillUnmount 生命周期
  useEffect(() => {
    logger.log('组件挂载完成 -- componentDidMount')
    return () => {
      logger.log('组件即将卸载销毁 -- componentWillUnmount')
    }
    // 注意要将 deps 设置为空数组
  }, [])

  // 模拟类组件 componentWillReceiveProps 生命周期
  useEffect(() => {
    logger.log('props 变化 -- componentWillReceiveProps')
  }, [props])

  // 模拟类组件 componentDidUpdate 生命周期
  useEffect(() => {
    logger.log('组件更新完成 -- componentDidUpdate')
  })

  return (
    <div>
      <p>props.counter: {props.counter}</p>
      <p>stateCounter: {stateCounter}</p>
      <button
        onClick={() => setStateCounter((stateCounter) => stateCounter + 1)}
      >
        add stateCounter
      </button>
    </div>
  )
}

export { FunctionComponentLifeCycleDemo }
