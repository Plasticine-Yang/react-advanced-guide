/** @description 使用 ref 完成组件通信 -- 类组件 */

import React from 'react'

import s from './style.module.scss'

interface CommunicationDemoFatherState {
  fatherToChildMessage: string
  childToFatherMessage: string
}

/**
 * 父 -> 子 使用 ref
 * 子 -> 父 使用 props 回调
 */
class CommunicationDemoFather extends React.Component<
  {},
  CommunicationDemoFatherState
> {
  state: Readonly<CommunicationDemoFatherState> = {
    fatherToChildMessage: '',
    childToFatherMessage: '',
  }

  childRef = React.createRef<CommunicationDemoChild>()

  /** @description 提供给子组件修改父组件中的状态 */
  handleChildToFather = (message: string) => {
    this.setState((state) => ({
      ...state,
      childToFatherMessage: message,
    }))
  }

  constructor(props: {}) {
    super(props)
    this.handleChildToFather = this.handleChildToFather.bind(this)
  }

  render(): React.ReactNode {
    const { fatherToChildMessage, childToFatherMessage } = this.state

    return (
      <div className={s.father}>
        <h3>父组件</h3>
        <p>子组件对我说：{childToFatherMessage}</p>
        <div className={s.messageInputBox}>
          <section>
            <label htmlFor="to-father">我对子组件说：</label>
            <input
              type="text"
              id="to-child"
              onChange={(e) =>
                this.setState((state) => ({
                  ...state,
                  fatherToChildMessage: e.target.value,
                }))
              }
            />
          </section>

          {/* 父 -> 子 -- 使用 ref 完成组件通信 */}
          <button
            onClick={() =>
              this.childRef.current?.setFatherToChildMessage(
                fatherToChildMessage,
              )
            }
          >
            发送
          </button>
        </div>

        <CommunicationDemoChild
          ref={this.childRef}
          onChildToFather={this.handleChildToFather}
        />
      </div>
    )
  }
}

interface CommunicationDemoChildProps {
  onChildToFather: (message: string) => void
}
// 子组件自己维护状态 不依赖于父组件 props
interface CommunicationDemoChildState {
  fatherToChildMessage: string
  childToFatherMessage: string
}
class CommunicationDemoChild extends React.Component<
  CommunicationDemoChildProps,
  CommunicationDemoChildState
> {
  state: Readonly<CommunicationDemoChildState> = {
    fatherToChildMessage: '',
    childToFatherMessage: '',
  }

  /** @description 暴露给父组件使用的 API -- 修改父到子的消息 fatherToChildMessage */
  setFatherToChildMessage(message: string) {
    this.setState((state) => ({ ...state, fatherToChildMessage: message }))
  }

  render(): React.ReactNode {
    const { onChildToFather: emitChildToFather } = this.props
    const { fatherToChildMessage, childToFatherMessage } = this.state

    return (
      <div className={s.child}>
        <h3>子组件</h3>
        <p>父组件对我说：{fatherToChildMessage}</p>
        <div className={s.messageInputBox}>
          <section>
            <label htmlFor="to-father">我对父组件说：</label>
            <input
              type="text"
              id="to-father"
              onChange={(e) =>
                this.setState((state) => ({
                  ...state,
                  childToFatherMessage: e.target.value,
                }))
              }
            />
          </section>

          {/* 子 -> 父 -- 使用 props 回调完成组件通信 */}
          <button onClick={() => emitChildToFather(childToFatherMessage)}>
            发送
          </button>
        </div>
      </div>
    )
  }
}

export { CommunicationDemoFather }
