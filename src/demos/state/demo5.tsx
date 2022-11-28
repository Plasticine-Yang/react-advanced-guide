/** @description 提升更新任务优先级 */

import React from 'react'
import ReactDOM from 'react-dom'

interface BatchUpdateDemo4State {
  counter: number
}
class BatchUpdateDemo4 extends React.Component<{}, BatchUpdateDemo4State> {
  state: Readonly<BatchUpdateDemo4State> = { counter: 0 }

  handleClick() {
    setTimeout(() => {
      this.setState({ counter: 1 })
    })

    this.setState({ counter: 2 })
    ReactDOM.flushSync(() => {
      this.setState({ counter: 3 })
    })

    this.setState({ counter: 4 })
  }

  render(): React.ReactNode {
    console.log('BatchUpdateDemo4 -- ', this.state.counter)
    return (
      <div>
        <p>{this.state.counter}</p>
        <button onClick={() => this.handleClick()}>counter++</button>
      </div>
    )
  }
}

export { BatchUpdateDemo4 }
