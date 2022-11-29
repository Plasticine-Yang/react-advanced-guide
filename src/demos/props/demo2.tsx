/** @description 显式注入 props */

import { createLoggerWithScope } from '~/utils'

const logger = createLoggerWithScope('InjectPropsDemo1')

const InjectPropsDemo1: React.FC = () => {
  return (
    <Father>
      <Child name="plasticine" age="21" />
    </Father>
  )
}

const Father: React.FC<any> = (props) => {
  return props.children
}

const Child: React.FC<any> = (props) => {
  logger.log('props:', props)
  return <div>child</div>
}

export { InjectPropsDemo1 }
