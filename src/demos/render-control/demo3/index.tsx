/** @description PureComponent */

import React, { useState } from 'react'
import { createLoggerWithScope } from '~/utils'

import s from './style.module.scss'

const logger = createLoggerWithScope('PureComponentDemo')

const PureComponentDemo: React.FC = () => {
  const [counter, setCounter] = useState(0)
  const [childCounter, setChildCounter] = useState(0)

  return (
    <div className={s.parent}>
      <p>父组件：{counter}</p>

      <NormalChild counter={childCounter} />
      <PureChild counter={childCounter} />

      <div className={s.btnGroup}>
        <button onClick={() => setCounter(counter + 1)}>add counter</button>
        <button onClick={() => setChildCounter(childCounter + 1)}>
          add childCounter
        </button>
      </div>
    </div>
  )
}

interface ChildProps {
  counter: number
}
interface ChildState {
  foo: string
  bar: string
}

/** @description PureComponent Child */
class PureChild extends React.PureComponent<ChildProps, ChildState> {
  state: Readonly<ChildState> = {
    foo: 'foo',
    bar: 'bar',
  }

  render(): React.ReactNode {
    logger.log('PureChild 渲染')
    const { counter } = this.props
    return (
      <div className={s.child}>
        <p>PureComponent：{counter}</p>
        <div className={s.btnGroup}>
          <button onClick={() => this.setState({ foo: 'foo' })}>
            setState 赋值相同属性值
          </button>

          <button onClick={() => this.setState({ foo: 'modified-foo' })}>
            setState 赋值不同属性值
          </button>

          <button
            onClick={() => {
              this.setState((state) => {
                // @ts-ignore
                state.bar = 'modified-bar'
                return state
              })
            }}
          >
            setState 返回相同的引用
          </button>
        </div>
      </div>
    )
  }
}

/** @description NormalComponent Child */
class NormalChild extends React.Component<ChildProps, ChildState> {
  state: Readonly<ChildState> = {
    foo: 'foo',
    bar: 'bar',
  }

  render(): React.ReactNode {
    logger.log('NormalChild 渲染')
    const { counter } = this.props
    return (
      <div className={s.child}>
        <p>NormalComponent：{counter}</p>
        <div className={s.btnGroup}>
          <button onClick={() => this.setState({ foo: 'foo' })}>
            setState 赋值相同属性值
          </button>

          <button onClick={() => this.setState({ foo: 'modified-foo' })}>
            setState 赋值不同属性值
          </button>

          <button
            onClick={() => {
              this.setState((state) => {
                // @ts-ignore
                state.bar = 'modified-bar'
                return state
              })
            }}
          >
            setState 返回相同的引用
          </button>
        </div>
      </div>
    )
  }
}

export { PureComponentDemo }
