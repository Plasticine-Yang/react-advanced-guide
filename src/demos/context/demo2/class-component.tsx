/** @description 类组件中消费数据 */

import React from 'react'

import { Theme, ThemeContext } from './context'

class ClassComponentProviderDemo extends React.Component {
  theme: Theme = { color: 'darkcyan', background: 'cyan' }

  render(): React.ReactNode {
    return (
      // ClassComponentConsumerDemo 中的 context 来源于最近的父组件中的 Provider
      <ThemeContext.Provider value={this.theme}>
        <ClassComponentConsumerDemo />
      </ThemeContext.Provider>
    )
  }
}

class ClassComponentConsumerDemo extends React.Component {
  // 为 context 声明类型
  declare context: React.ContextType<typeof ThemeContext>

  render(): React.ReactNode {
    const { color, background } = this.context
    return <div style={{ color, background }}>Class Component Consumber</div>
  }
}
// 需要声明 contextType 才能让 React 知道类组件中的 this.context 指向谁
// 注意不是 contextTypes !!!
ClassComponentConsumerDemo.contextType = ThemeContext

export { ClassComponentProviderDemo }
