import { createContext } from 'react'

interface Theme {
  color: string
  background: string
}

const defaultTheme: Theme = {
  color: 'black',
  background: 'white',
}

const lightTheme: Theme = { ...defaultTheme }
const darkTheme: Theme = {
  color: 'white',
  background: 'black',
}

/** @description 主题上下文对象 */
const ThemeContext = createContext<Theme>(defaultTheme)
ThemeContext.displayName = 'PlasticineThemeContext'

export type { Theme }
export { ThemeContext, lightTheme, darkTheme }
