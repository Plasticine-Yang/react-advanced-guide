import { useContext, useEffect, useState, memo, useMemo } from 'react'

import { createLoggerWithScope } from '~/utils'

import { darkTheme, lightTheme, Theme, ThemeContext } from './context'

import s from './style.module.scss'

const logger = createLoggerWithScope('DynamicContextDemo')

const DynamicContextDemo: React.FC = () => {
  const [theme, setTheme] = useState<Theme>(lightTheme)

  const handleToggleTheme = () => {
    if (theme === lightTheme) setTheme(darkTheme)
    else setTheme(lightTheme)
  }

  return (
    <div className={s.container}>
      <ThemeContext.Provider value={theme}>
        <Child />
      </ThemeContext.Provider>
      <button onClick={() => handleToggleTheme()}>toggle theme</button>
    </div>
  )
}

// 通过 memo 处理后 只要 Child 组件的 props 不变则 Child 组件不会随着父组件的渲染而重新渲染
// 这里是为了验证 Consumer 组件的更新并不是由 Child 组件的更新引起的
const Child: React.FC = memo(() => {
  // 用于验证 Consumer 更新是否是由 Child 组件更新引起的 而是由 context API 的运行机制引起的
  useEffect(() => {
    logger.log('Child 组件渲染')
  })

  return <Consumer />
})

const Consumer: React.FC = () => {
  const { color, background } = useContext(ThemeContext)

  useEffect(() => {
    logger.log('Consumer 组件渲染')
  })

  return (
    <div style={{ color, background }} className={s.consumer}>
      Consumber
    </div>
  )
}

export { DynamicContextDemo }
