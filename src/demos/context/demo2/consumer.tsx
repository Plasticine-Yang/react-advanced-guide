import { useState } from 'react'

import { Theme, ThemeContext } from './context'

const ContextProviderDemo2: React.FC = () => {
  const [theme] = useState<Theme>({ color: 'darkcyan', background: 'cyan' })

  return (
    <ThemeContext.Provider value={theme}>
      <ContextConsumerDemo />
    </ThemeContext.Provider>
  )
}

interface ConsumberComponentProps {
  theme: Theme
}
const ContextConsumerDemo: React.FC = () => {
  // 消费数据的真正组件
  const ConsumberComponent: React.FC<ConsumberComponentProps> = (props) => {
    const { color, background } = props.theme

    return <div style={{ color, background }}>Context Consumber Component</div>
  }

  // 通过包裹 Consumber 组件获取消费数据的能力，将消费数据作为组件 props 传给真正消费数据的组件
  return (
    <ThemeContext.Consumer>
      {(theme) => <ConsumberComponent theme={theme} />}
    </ThemeContext.Consumer>
  )
}

export { ContextProviderDemo2 }
