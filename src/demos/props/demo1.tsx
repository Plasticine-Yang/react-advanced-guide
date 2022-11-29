/** @description 监听 props 变化 */

import React from 'react'

interface PropsDemo1State {
  message: string
}
interface PropsDemo1ChildProps {
  message: string
}
class PropsDemo1 extends React.Component<{}, PropsDemo1State> {
  state: Readonly<PropsDemo1State> = {
    message: 'Hello React',
  }

  handleChange(newVal: string) {
    this.setState({ message: newVal })
  }

  render(): React.ReactNode {
    return (
      <div>
        <PropsDemo1Child message={this.state.message} />
        <input
          type="text"
          onChange={(e) => this.handleChange(e.target.value)}
        />
      </div>
    )
  }
}
class PropsDemo1Child extends React.Component<PropsDemo1ChildProps> {
  // 监听 props 变化
  componentWillReceiveProps(nextProps: Readonly<PropsDemo1ChildProps>): void {
    console.log('[PropsDemo1Child] nextProps:', nextProps)
  }

  render(): React.ReactNode {
    return (
      <div>
        <p>{this.props.message}</p>
      </div>
    )
  }
}

export { PropsDemo1 }
