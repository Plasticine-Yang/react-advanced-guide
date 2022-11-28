/** @description 事件处理函数的异步操作中 setState 批量更新 */

import React from 'react'
import { unstable_batchedUpdates } from 'react-dom'

interface BatchUpdateDemo3State {
  counter: number
}
class BatchUpdateDemo3 extends React.Component<{}, BatchUpdateDemo3State> {
  state: Readonly<BatchUpdateDemo3State> = { counter: 0 }

  handleClick() {
    setTimeout(() => {
      unstable_batchedUpdates(() => {
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

export { BatchUpdateDemo3 }
