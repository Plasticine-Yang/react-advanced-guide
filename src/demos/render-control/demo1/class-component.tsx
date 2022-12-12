/** @description 父组件更新渲染引起子组件的不必要更新渲染 -- 类组件 */

import React from 'react'

import { createLoggerWithScope } from '~/utils'

import s from './style.module.scss'

const logger = createLoggerWithScope('RenderControlDemo1ClassComponent')

interface RenderControlDemo1ClassComponentState {
  counter: number
}
class RenderControlDemo1ClassComponent extends React.Component<
  {},
  RenderControlDemo1ClassComponentState
> {
  state: Readonly<RenderControlDemo1ClassComponentState> = {
    counter: 0,
  }

  componentDidUpdate(): void {
    logger.log('父组件更新渲染')
  }

  render(): React.ReactNode {
    const { counter } = this.state

    return (
      <div className={s.parent}>
        <p>父组件: {counter}</p>

        <Child />

        <button
          onClick={() =>
            this.setState((state) => ({ counter: state.counter + 1 }))
          }
        >
          add count
        </button>
      </div>
    )
  }
}

class Child extends React.Component {
  componentDidUpdate(): void {
    logger.log('子组件更新渲染')
  }

  render(): React.ReactNode {
    return (
      <div className={s.child}>
        <p>子组件</p>
      </div>
    )
  }
}

export { RenderControlDemo1ClassComponent }
