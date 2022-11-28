/** @description batchUpdate 的流程 -- 在事件处理函数中执行同步操作 */

import React from 'react'

interface BatchUpdateDemo1State {
  counter: number
}
class BatchUpdateDemo1 extends React.Component<{}, BatchUpdateDemo1State> {
  state: Readonly<BatchUpdateDemo1State> = { counter: 0 }

  handleClick() {
    this.setState({ counter: this.state.counter + 1 }, () => {
      console.log(`callback 1 -- ${this.state.counter}`)
    })
    console.log(this.state.counter)

    this.setState({ counter: this.state.counter + 1 }, () => {
      console.log(`callback 2 -- ${this.state.counter}`)
    })
    console.log(this.state.counter)

    this.setState({ counter: this.state.counter + 1 }, () => {
      console.log(`callback 3 -- ${this.state.counter}`)
    })
    console.log(this.state.counter)
  }

  render(): React.ReactNode {
    return (
      <div>
        <p>{this.state.counter}</p>
        <button onClick={() => this.handleClick()}>counter++</button>
      </div>
    )
  }
}

export { BatchUpdateDemo1 }
