/** @description 使用 React 组件 */

import React, { useState } from 'react'

/** @description 类组件 */
interface ClassComponentState {
  message: string
}
class ClassComponent extends React.Component {
  // state
  state: Readonly<ClassComponentState> = { message: "I'm ClassComponent." }

  // methods
  sayHello = () => this.setState({ message: "Hello, I'm ClassComponent." })

  // render method
  render(): React.ReactNode {
    return <div onClick={() => this.sayHello()}>{this.state.message}</div>
  }
}

/** @description 函数组件 */
const FunctionComponent: React.FunctionComponent = () => {
  const [message, setMessage] = useState("I'm FunctionComponent.")

  const sayHello = () => {
    setMessage("Hello, I'm FunctionComponent")
  }

  console.log('函数组件中的 this -- ', this)

  return <div onClick={() => sayHello()}>{message}</div>
}

export { ClassComponent, FunctionComponent }
