/** @description ref 高阶用法 -- HOC 中转发 ref */

import React, {
  ComponentPropsWithRef,
  LegacyRef,
  useEffect,
  useRef,
} from 'react'
import { createLoggerWithScope } from '~/utils'

class TestComponent extends React.Component {
  render(): React.ReactNode {
    return <p>TestComponent</p>
  }
}

/** @description 不使用 forwardRef 转发 HOC 中的 ref */
const HOCWithoutForwardRef = (Component: typeof React.Component) => {
  class WrapComponent extends React.Component {
    render(): React.ReactNode {
      return (
        <div>
          <p>WrapComponent</p>
          <Component />
        </div>
      )
    }
  }

  return WrapComponent
}

const HOCComponent1 = HOCWithoutForwardRef(TestComponent)
const RefHOCWithoutForwardRefDemo = () => {
  const logger = createLoggerWithScope('RefHOCWithoutForwardRefDemo')
  const wrapRef = useRef(null)

  useEffect(() => {
    // wrapRef 指向的是 WrapComponent 实例 而不是 HOCComponent1 实例
    logger.log(wrapRef.current)
  }, [])

  return <HOCComponent1 ref={wrapRef} />
}

/** @description HOC 中使用 forwardRef 转发 ref */
const HOCWithForwardRef = (Component: typeof React.Component) => {
  class WrapComponent extends React.Component<{
    forwardedRef: LegacyRef<any>
  }> {
    render(): React.ReactNode {
      const { forwardedRef } = this.props

      return (
        <div>
          <p>WrapComponent</p>
          <Component ref={forwardedRef} />
        </div>
      )
    }
  }

  return React.forwardRef((props, ref) => (
    <WrapComponent forwardedRef={ref} {...props} />
  ))
}

const HOCComponent2 = HOCWithForwardRef(TestComponent)
const RefHOCWithForwardRefDemo = () => {
  const logger = createLoggerWithScope('RefHOCWithForwardRefDemo')
  const hocComponent2Ref = useRef(null)

  useEffect(() => {
    // hocComponent2Ref 指向的是 HOCComponent2 实例
    logger.log(hocComponent2Ref.current)
  }, [])

  return <HOCComponent2 ref={hocComponent2Ref} />
}

export { RefHOCWithoutForwardRefDemo, RefHOCWithForwardRefDemo }
