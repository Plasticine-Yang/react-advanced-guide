import React from 'react'

import { createLoggerWithScope } from '~/utils'

const logger = createLoggerWithScope('HOCDemo5')

const OnClickHOC = (Component: typeof React.Component) => {
  class WrappedComponent extends React.Component {
    handleClick() {
      logger.log('检测到 click 事件触发')
    }

    render(): React.ReactNode {
      return (
        <div onClick={() => this.handleClick()}>
          <Component {...this.props} />
        </div>
      )
    }
  }

  return WrappedComponent
}

class Demo extends React.Component {
  render(): React.ReactNode {
    return <button>Button</button>
  }
}

const HOCDemo5 = OnClickHOC(Demo)

export { HOCDemo5 }
