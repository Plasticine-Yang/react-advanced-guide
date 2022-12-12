/** @description 父组件更新渲染引起子组件的不必要更新渲染 -- 类组件 */

import React, { ReactElement } from 'react'

import { createLoggerWithScope } from '~/utils'

import s from './style.module.scss'

const logger = createLoggerWithScope('RenderControlDemo2ClassComponent')

interface RenderControlDemo2ClassComponentState {
  counter: number
  childCounter: number
}
class RenderControlDemo2ClassComponent extends React.Component<
  {},
  RenderControlDemo2ClassComponentState
> {
  state: Readonly<RenderControlDemo2ClassComponentState> = {
    counter: 0,
    childCounter: 0,
  }

  cachedChild: ReactElement<ChildProps>

  constructor(props: {}) {
    super(props)

    this.cachedChild = <Child counter={this.state.childCounter} />
  }

  componentDidUpdate(): void {
    logger.log('父组件更新渲染')
  }

  childRenderControl() {
    const { props } = this.cachedChild

    // 仅当 childCounter 变化时才更新子组件
    if (props.counter !== this.state.childCounter) {
      // 使用新状态克隆子组件并更新缓存
      return (this.cachedChild = React.cloneElement(this.cachedChild, {
        counter: this.state.childCounter,
      }))
    }

    // 否则直接返回缓存的子组件
    return this.cachedChild
  }

  render(): React.ReactNode {
    const { counter } = this.state

    return (
      <div className={s.parent}>
        <p>父组件: {counter}</p>

        {this.childRenderControl()}

        <div className={s.btnGroup}>
          <button
            onClick={() =>
              this.setState((state) => ({
                ...this.state,
                counter: state.counter + 1,
              }))
            }
          >
            add counter
          </button>

          <button
            onClick={() =>
              this.setState((state) => ({
                ...this.state,
                childCounter: state.childCounter + 1,
              }))
            }
          >
            add childCounter
          </button>
        </div>
      </div>
    )
  }
}

interface ChildProps {
  counter: number
}
class Child extends React.Component<ChildProps> {
  componentDidUpdate(): void {
    logger.log('子组件更新渲染')
  }

  render(): React.ReactNode {
    const { counter } = this.props
    return (
      <div className={s.child}>
        <p>子组件: {counter}</p>
      </div>
    )
  }
}

export { RenderControlDemo2ClassComponent }
