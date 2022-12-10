/** @description Legacy Context */

import React from 'react'

import PropTypes from 'prop-types'

/**
 * @description 提供数据
 */
class ContextProviderDemo extends React.Component {
  /** @description 在 getChildContext 中指定 context 的数据 */
  getChildContext() {
    const theme = {
      color: 'darkcyan',
      background: 'cyan',
    }

    return { theme }
  }

  render(): React.ReactNode {
    return (
      <div>
        <p>Provider</p>
        <ContextConsumerDemo />
      </div>
    )
  }
}

// @ts-ignore
ContextProviderDemo.childContextTypes = {
  theme: PropTypes.object,
}

/**
 * @description 消费数据
 */
class ContextConsumerDemo extends React.Component {
  render(): React.ReactNode {
    const { color, background } = (this.context as any).theme

    return <div style={{ color, background }}>Consumer</div>
  }
}

// @ts-ignore
ContextConsumerDemo.contextTypes = {
  theme: PropTypes.object,
}

export { ContextProviderDemo }
