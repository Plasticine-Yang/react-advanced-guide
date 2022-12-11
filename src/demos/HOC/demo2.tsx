/** @description 反向继承 */

import React from 'react'

class HOCDemo2 extends React.Component {
  render(): React.ReactNode {
    const TargetComponent = HOC(Foo)
    return <TargetComponent />
  }
}

const HOC = (Component: typeof Foo) => {
  return class WrappedComponent extends Component {
    state: Readonly<FooState> = {
      name: 'foo',
    }
  }
}

interface FooState {
  name: string
}
class Foo extends React.Component<{}, FooState> {
  render(): React.ReactNode {
    const { name } = this.state
    return <div>name: {name}</div>
  }
}

export { HOCDemo2 }
