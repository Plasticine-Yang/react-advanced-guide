import { useContext, useState } from 'react'

import { Theme, ThemeContext } from './context'

const FunctionComponentProviderDemo: React.FC = () => {
  const [theme] = useState<Theme>({
    color: 'darkcyan',
    background: 'cyan',
  })

  return (
    <ThemeContext.Provider value={theme}>
      <FunctionComponentConsumerDemo />
    </ThemeContext.Provider>
  )
}

const FunctionComponentConsumerDemo: React.FC = () => {
  // 通过 useContext 消费最近的父组件中 Provider 提供的数据
  const { color, background } = useContext(ThemeContext)

  return <div style={{ color, background }}>Function Component Consumber</div>
}

export { FunctionComponentProviderDemo }
