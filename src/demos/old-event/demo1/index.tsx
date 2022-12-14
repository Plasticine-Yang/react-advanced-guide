/** @description React 事件冒泡和事件捕获 */

import { createLoggerWithScope } from '~/utils'

import s from './style.module.scss'

const logger = createLoggerWithScope('Demo1')

const Demo1: React.FC = () => {
  const handleClick = (name: string) => {
    logger.log(`${name} -- 冒泡阶段点击事件触发`)
  }

  const handleClickCapture = (name: string) => {
    logger.log(`${name} -- 捕获阶段点击事件触发`)
  }

  return (
    <div className={s.container}>
      {/* 事件冒泡 */}
      <section className={s.box} onClick={() => handleClick('容器')}>
        <button onClickCapture={() => handleClick('按钮')}>事件冒泡</button>
      </section>

      {/* 事件捕获 */}
      <section
        className={s.box}
        onClickCapture={() => handleClickCapture('容器')}
      >
        <button onClickCapture={() => handleClickCapture('按钮')}>
          事件捕获
        </button>
      </section>
    </div>
  )
}

export { Demo1 }
