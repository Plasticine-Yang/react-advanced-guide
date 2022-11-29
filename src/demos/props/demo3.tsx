/** @description 隐式注入 props */

import React from 'react'
import { createLoggerWithScope } from '~/utils'

const logger = createLoggerWithScope('InjectPropsDemo2')

const InjectPropsDemo2: React.FC = () => {
  return (
    <Father>
      <Child name="plasticine" age="21" />
    </Father>
  )
}

const Father: React.FC<any> = (props) => {
  return React.cloneElement(props.children, { injectedProp: 'hello' })
}

const Child: React.FC<any> = (props) => {
  logger.log('props:', props)
  return <div>child</div>
}

export { InjectPropsDemo2 }
