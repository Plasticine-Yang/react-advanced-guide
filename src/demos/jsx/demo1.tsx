import React, { useState } from 'react'

const toLearn = ['react', 'vue', 'vite', 'node']

interface SimpleComponentProps {
  message?: string
}
const SimpleComponent = ({
  message = 'A Simple Component.',
}: SimpleComponentProps) => <div>{message}</div>

const JSXDemo1 = () => {
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

  console.log('经过 React.createElement 处理后的 el:', el)

  return el
}

export { JSXDemo1 }
