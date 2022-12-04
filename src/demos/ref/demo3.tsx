/** @description ref 高阶用法 -- 合并转发 ref */

import React, {
  ForwardedRef,
  forwardRef,
  MutableRefObject,
  useEffect,
  useRef,
} from 'react'

import { createLoggerWithScope } from '~/utils'

const logger = createLoggerWithScope('Foo')

/** @description 自定义 ref 的类型 */
interface CustomRef {
  bar: Bar
  barButton: HTMLButtonElement
  baz: Baz
}

class Baz extends React.Component {
  render(): React.ReactNode {
    return <div>Baz</div>
  }
}

class Bar extends React.Component<{
  customRef: ForwardedRef<CustomRef>
}> {
  buttonEl: HTMLButtonElement | null = null
  bazInstance: Baz | null = null

  componentDidMount(): void {
    const { customRef } = this.props

    if (customRef) {
      ;(customRef as MutableRefObject<CustomRef>).current = {
        bar: this,
        barButton: this.buttonEl!,
        baz: this.bazInstance!,
      }
    }
  }

  render() {
    return (
      <>
        <button ref={(el) => (this.buttonEl = el)}>Bar button</button>
        <Baz ref={(instance) => (this.bazInstance = instance)} />
      </>
    )
  }
}
const FowardRefBar = forwardRef<CustomRef>((props, ref) => (
  <Bar {...props} customRef={ref} />
))

const Foo: React.FC = () => {
  const customRef = useRef<CustomRef>(null)

  useEffect(() => {
    logger.log(customRef.current)
  }, [])

  return <FowardRefBar ref={customRef} />
}

export { Foo }
