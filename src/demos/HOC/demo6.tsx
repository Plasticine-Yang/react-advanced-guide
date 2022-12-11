/** @description HOC 原始类组件静态属性和方法丢失 */

import React from 'react'

import hoistNonReactStatics from 'hoist-non-react-statics'

const HOC = (Component: typeof React.Component) => {
  class WrappedComponent extends React.Component {
    render(): React.ReactNode {
      return <Component />
    }
  }

  // 拷贝 Component 静态属性和方法到 WrappedComponent 上
  hoistNonReactStatics(WrappedComponent, Component)

  return WrappedComponent
}

const HOCDemo6 = () => {
  const TargetComponent = HOC(Foo)

  // @ts-ignore
  console.log(TargetComponent.age)

  // @ts-ignore
  TargetComponent.sayHello()

  return <TargetComponent />
}

class Foo extends React.Component {
  static age = 21
  static sayHello() {
    console.log('hello')
  }

  render(): React.ReactNode {
    return <div>Foo</div>
  }
}

export { HOCDemo6 }
