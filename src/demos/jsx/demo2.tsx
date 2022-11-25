import React, { useState } from 'react'

const toLearn = ['react', 'vue', 'vite', 'node']

interface SimpleComponentProps {
  message?: string
}
const SimpleComponent = ({
  message = 'A Simple Component.',
}: SimpleComponentProps) => <div>{message}</div>

const JSXDemo2 = () => {
  const [status, setStatus] = useState(false)

  const renderByFunc = () => <div>Rendered by function.</div>
  const el = (
    <>
      {/* element 元素类型 */}
      <div>Hello World</div>
      {/* fragment 类型 */}
      <React.Fragment>
        <div>🚀🚀🚀</div>
      </React.Fragment>
      {/* text 文本类型 */}
      This is a text element.
      {/* 数组节点类型 */}
      {toLearn.map((item) => (
        <div key={item}>[Array Element] -- let us learn {item} </div>
      ))}
      {/* 组件类型 */}
      <SimpleComponent />
      {/* 三目运算 */}
      {status ? (
        <SimpleComponent message="status: true" />
      ) : (
        <SimpleComponent message="status: false" />
      )}
      {/* 函数渲染 */}
      {renderByFunc()}
      <button onClick={() => setStatus(!status)}>toggle status</button>
    </>
  )

  // 1. children 数组扁平化 -- 将内部的 数组节点 拍平
  const { children } = el.props
  const flatChildren = React.Children.toArray(children)
  console.log('扁平化后的 children:', flatChildren)

  // 2. 去除纯字符串子元素
  const newChildren: any[] = []
  React.Children.forEach(flatChildren, (child) => {
    if (React.isValidElement(child)) {
      newChildren.push(child)
    }
  })

  // 3. 往 children 的末尾插入新元素
  const lastChild = React.createElement(
    'div',
    { className: 'last' },
    'last element',
  )
  newChildren.push(lastChild)

  // 4. 克隆新的元素节点并渲染
  const newEl = React.cloneElement(el, {}, ...newChildren)
  console.log('增强可控性后的 el:', newEl)

  return newEl
}

export { JSXDemo2 }
