/** @description 劫持控制渲染 */

import React from 'react'

const HOCDemo3: React.FC = () => {
  const TargetComponent = HOC(Foo)
  return <TargetComponent />
}

const HOC = (Component: typeof React.Component) => {
  return class WrappedComponent extends Component {
    render(): React.ReactNode {
      // 调用原始组件的 render 方法获取渲染后的 React Element
      const el = super.render()
      // @ts-ignore
      const rawChildren = el.props.children

      // 修改 el
      const modifiedChildren = React.Children.map(rawChildren, (child, idx) => {
        if (idx === 0) {
          return <li>React 666</li>
        }

        return child
      })

      // @ts-ignore
      return React.cloneElement(el, el.props, modifiedChildren)
    }
  }
}

class Foo extends React.Component {
  render(): React.ReactNode {
    return (
      <ul>
        <li>React</li>
        <li>Vue</li>
        <li>Solid</li>
        <li>Svelte</li>
      </ul>
    )
  }
}

export { HOCDemo3 }
