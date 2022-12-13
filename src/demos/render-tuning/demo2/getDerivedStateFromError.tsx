/** @description 使用 getDerivedStateFromError 控制错误渲染边界 */

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

interface GetDerivedStateFromErrorDemoState {
  hasError: boolean
  errorInfo: string
}
class GetDerivedStateFromErrorDemo extends React.Component<
  {},
  GetDerivedStateFromErrorDemoState
> {
  state: Readonly<GetDerivedStateFromErrorDemoState> = {
    hasError: false,
    errorInfo: '',
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, errorInfo: error.message }
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

export { GetDerivedStateFromErrorDemo }
