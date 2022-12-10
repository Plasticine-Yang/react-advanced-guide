import { createContext } from 'react'

interface Theme {
  color: string
  background: string
}

const defaultTheme: Theme = {
  color: 'black',
  background: 'white',
}

/** @description 主题上下文对象 */
const ThemeContext = createContext<Theme>(defaultTheme)

export type { Theme }
export { ThemeContext }
