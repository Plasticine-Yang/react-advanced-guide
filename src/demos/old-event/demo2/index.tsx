/** @description React 阻止事件冒泡 */

import { MouseEvent } from 'react'

import { createLoggerWithScope } from '~/utils'

import s from './style.module.scss'

const logger = createLoggerWithScope('Demo2')

const Demo2: React.FC = () => {
  const handleClick = (e: MouseEvent) => {
    e.stopPropagation()
    logger.log('子元素点击')
  }

  const handleContainerClick = () => {
    logger.log('容器元素点击')
  }

  return (
    <div className={s.container} onClick={handleContainerClick}>
      <button onClick={handleClick}>停止冒泡</button>
    </div>
  )
}

export { Demo2 }
