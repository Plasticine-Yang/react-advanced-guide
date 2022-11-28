/** @description batchUpdate 的流程 -- 在事件处理函数中执行异步操作 */

import React from 'react'

interface BatchUpdateDemo2State {
  counter: number
}
class BatchUpdateDemo2 extends React.Component<{}, BatchUpdateDemo2State> {
  state: Readonly<BatchUpdateDemo2State> = { counter: 0 }

  handleClick() {
    setTimeout(() => {
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
    })
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

export { BatchUpdateDemo2 }
