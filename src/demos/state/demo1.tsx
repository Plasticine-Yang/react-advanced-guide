/** @description 类组件 state -- setState */

import React from 'react'

/** @description 对象形式 setState */
interface SetStateDemo1State {
  counter: number
}
class SetStateDemo1 extends React.Component<{}, SetStateDemo1State> {
  state = {
    counter: 0,
  }

  render(): React.ReactNode {
    return (
      <div>
        <p>counter: {this.state.counter}</p>
        <button
          onClick={() =>
            this.setState({ counter: this.state.counter + 1 }, () => {
              console.log(
                `对象形式 setState 之后的 counter: ${this.state.counter}`,
              )
            })
          }
        >
          对象形式 setState
        </button>
      </div>
    )
  }
}

/** @description 函数形式 setState */
interface SetStateDemo2State {
  counter: number
}
class SetStateDemo2 extends React.Component<{}, SetStateDemo2State> {
  state = {
    counter: 0,
  }

  render(): React.ReactNode {
    return (
      <div>
        <p>counter: {this.state.counter}</p>
        <button
          onClick={() =>
            this.setState(
              (state, props) => ({ counter: state.counter + 1 }),
              () => {
                console.log(
                  `函数形式 setState 之后的 counter: ${this.state.counter}`,
                )
              },
            )
          }
        >
          函数形式 setState
        </button>
      </div>
    )
  }
}

export { SetStateDemo1, SetStateDemo2 }
