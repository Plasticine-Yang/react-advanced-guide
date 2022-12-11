/** @description 属性代理 */

import React from 'react'

class HOCDemo1 extends React.Component {
  render(): React.ReactNode {
    const TargetComponent = HOC(Foo)
    return <TargetComponent />
  }
}

const HOC = (Component: typeof React.Component) => {
  return class WrappedComponent extends React.Component {
    render(): React.ReactNode {
      // 对原始组件的强化操作 -- 混入 props
      const fooEnhancedProps: FooEnhancedProps = {
        name: 'foo',
      }

      // 原始组件在代理组件中渲染
      return <Component {...fooEnhancedProps} />
    }
  }
}

type FooRawProps = {}
type FooEnhancedProps = { name: string }
type FooProps = FooRawProps & FooEnhancedProps
class Foo extends React.Component<FooProps> {
  render(): React.ReactNode {
    const { name } = this.props
    return <div>name: {name}</div>
  }
}

export { HOCDemo1 }
