/** @description 使用 componentDidError 控制错误渲染边界 */

import React, { useState } from 'react'

const Foo: React.FC = () => {
  const [hasError, setHasError] = useState(false)

  if (hasError) {
    throw new Error('throw error 按钮触发异常')
  }

  return (
    <div>
      <p>Foo</p>
      <button
        onClick={() => {
          setHasError(true)
        }}
      >
        throw error
      </button>
    </div>
  )
}

interface ComponentDidCatchDemoState {
  hasError: boolean
  errorInfo: string
}
class ComponentDidCatchDemo extends React.Component<
  {},
  ComponentDidCatchDemoState
> {
  state: Readonly<ComponentDidCatchDemoState> = {
    hasError: false,
    errorInfo: '',
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
    this.setState({ hasError: true, errorInfo: error.message })
  }

  render(): React.ReactNode {
    const { hasError, errorInfo } = this.state
    return (
      <div>
        {hasError ? <div>Foo 组件错误: {errorInfo}</div> : <Foo />}
        <p>Hello</p>
      </div>
    )
  }
}

export { ComponentDidCatchDemo }
