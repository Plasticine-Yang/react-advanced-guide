/** @description 获取 ref 的三种方式 */

import React, { PropsWithChildren } from 'react'

import { createLoggerWithScope } from '~/utils'

class Child extends React.Component<PropsWithChildren> {
  render(): React.ReactNode {
    const { children } = this.props

    return (
      <div>
        <p>Child</p>
        {children}
      </div>
    )
  }
}

/** @description ref 属性传递字符串 */
class RefDemo1 extends React.Component {
  logger = createLoggerWithScope('RefDemo1')

  componentDidMount(): void {
    this.logger.log(this.refs)
  }

  render(): React.ReactNode {
    return (
      <>
        <div ref="refDemo1DOM">ref 属性传递字符串获取 DOM 元素</div>
        <Child ref="refDemo1Component">ref 属性传递字符串获取类组件实例</Child>
      </>
    )
  }
}

/** @description ref 属性传递函数 */
class RefDemo2 extends React.Component {
  logger = createLoggerWithScope('RefDemo2')

  refDemo2DOM: HTMLElement | null = null
  refDemo2Component: Child | null = null

  componentDidMount(): void {
    this.logger.log(this.refDemo2DOM)
    this.logger.log(this.refDemo2Component)
  }

  render(): React.ReactNode {
    return (
      <>
        <div ref={(el) => (this.refDemo2DOM = el)}>
          ref 属性传递函数获取 DOM 元素
        </div>

        <Child ref={(child) => (this.refDemo2Component = child)}>
          ref 属性传递函数获取类组件实例
        </Child>
      </>
    )
  }
}

/** @description ref 属性传递对象 */
class RefDemo3 extends React.Component {
  logger = createLoggerWithScope('RefDemo3')

  refDemo3DOM = React.createRef<HTMLDivElement>()
  refDemo3Component = React.createRef<Child>()

  componentDidMount(): void {
    this.logger.log(this.refDemo3DOM)
    this.logger.log(this.refDemo3Component)
  }

  render(): React.ReactNode {
    return (
      <>
        <div ref={this.refDemo3DOM}>ref 属性传递对象获取 DOM 元素</div>

        <Child ref={this.refDemo3Component}>
          ref 属性传递对象获取类组件实例
        </Child>
      </>
    )
  }
}

export { RefDemo1, RefDemo2, RefDemo3 }
