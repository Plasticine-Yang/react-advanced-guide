/** @description useState 的用法 */

import { useState } from 'react'

/** @description initialState 使用直接数据 */
const UseStateDemo1: React.FC = () => {
  const [counter, setCounter] = useState(0)

  const handleClick = () => {
    setCounter(counter + 1)
  }

  return (
    <div>
      <p>{counter}</p>
      <button onClick={() => handleClick()}>counter++</button>
    </div>
  )
}

/** @description initialState 使用函数 */
const UseStateDemo2: React.FC = () => {
  const [counter, setCounter] = useState(() => {
    // 假设这里有很多复杂计算...
    const value = Math.random() > 0.5 ? 1 : 0

    // 计算完后返回值作为 initialState
    return value
  })

  const handleClick = () => {
    setCounter(counter + 1)
  }

  return (
    <div>
      <p>{counter}</p>
      <button onClick={() => handleClick()}>counter++</button>
    </div>
  )
}

/** @description setState reducer */
const UseStateDemo3: React.FC = () => {
  const [counter, setCounter] = useState(0)

  const handleClick = () => {
    // 直接 setState
    setCounter(counter + 1)

    // 使用 reducer 的方式 setState
    setCounter((counter) => counter + 1)
  }

  return (
    <div>
      <p>{counter}</p>
      <button onClick={() => handleClick()}>counter + 2</button>
    </div>
  )
}

export { UseStateDemo1, UseStateDemo2, UseStateDemo3 }
