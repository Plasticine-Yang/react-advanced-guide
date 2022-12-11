/** @description 动态加载组件 */

import React, { useEffect, useState } from 'react'

const HOCDemo4: React.FC = () => {
  const TargetComponent = DynamicLoadHOC(() => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(import('./component'))
      }, 5000)
    })
  })

  return (
    <div>
      <TargetComponent />
    </div>
  )
}

interface WrappedComponentState {
  Component: typeof React.Component | null
}
const DynamicLoadHOC = (loader: () => Promise<any>) => {
  return class WrappedComponent extends React.Component<
    {},
    WrappedComponentState
  > {
    state: Readonly<WrappedComponentState> = {
      Component: null,
    }

    componentDidMount(): void {
      if (this.state.Component) return
      loader()
        .then((module) => module.default)
        .then((Component) => this.setState({ Component }))
    }

    render(): React.ReactNode {
      const { Component } = this.state
      return Component ? <Component {...this.props} /> : <Loading />
    }
  }
}

const Loading: React.FC = () => {
  return <div>Loading...</div>
}

export { HOCDemo4 }
