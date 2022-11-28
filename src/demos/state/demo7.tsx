/** @description useEffect 监听 state 变化 */

import { useEffect, useState } from 'react'

/** @description 监听 counter 变化 */
const UseEffectDemo1: React.FC = () => {
  const [counter, setCounter] = useState(0)

  // 在 useEffect 中监听 counter 变化
  useEffect(() => {
    console.log(`counter changed: ${counter}`)
  }, [counter])

  return (
    <div>
      <p>{counter}</p>
      <button onClick={() => setCounter(counter + 1)}>counter++</button>
    </div>
  )
}

export { UseEffectDemo1 }
