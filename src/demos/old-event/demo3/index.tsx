/** @description React 事件绑定流程 */

import { createLoggerWithScope } from '~/utils'

import s from './style.module.scss'

const logger = createLoggerWithScope('Demo3')

const Demo3: React.FC = () => {
  const handleChange = () => {
    logger.log('change')
  }

  const handleClick = () => {
    logger.log('click')
  }

  return (
    <div className={s.container}>
      <input type="text" onChange={handleChange} />
      <button onClick={handleClick}>Button</button>
    </div>
  )
}

export { Demo3 }
