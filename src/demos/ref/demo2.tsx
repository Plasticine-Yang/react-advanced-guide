/** @description ref 高阶用法 -- 跨层级获取 */

import { forwardRef, LegacyRef, PropsWithRef, useEffect } from 'react'
import { createLoggerWithScope } from '~/utils'

const logger = createLoggerWithScope('GrandFather')

/** @description 孙组件 */
const Child: React.FC<{ grandRef: LegacyRef<HTMLDivElement> }> = (props) => {
  const { grandRef } = props

  return (
    <>
      <p>Child</p>
      <div ref={grandRef}>要获取的目标元素</div>
    </>
  )
}

/**
 * @description 父组件
 *
 * 第一个泛型参数是 ref 的类型
 * 第二个泛型参数是 props 的类型
 */
const Father = forwardRef<HTMLDivElement, {}>((props, ref) => {
  return (
    <div>
      <Child grandRef={ref} />
    </div>
  )
})

/** @description 爷组件 */
const GrandFather: React.FC = () => {
  let grandChildDiv: HTMLDivElement | null = null

  useEffect(() => {
    logger.log(grandChildDiv)
  }, [])

  return (
    <div>
      <Father ref={(el) => (grandChildDiv = el)} />
    </div>
  )
}

export { GrandFather }
