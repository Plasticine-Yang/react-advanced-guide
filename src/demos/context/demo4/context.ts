import { createContext } from 'react'

// ================ Theme Context ================

interface Theme {
  color: string
  background: string
}

const defaultTheme: Theme = {
  color: 'darkcyan',
  background: 'cyan',
}

const ThemeContext = createContext<Theme>(defaultTheme)

// ================ i18n Context ================

interface I18n {
  lang: 'zh-CN' | 'en-US'
}

const defaultI18n: I18n = {
  lang: 'zh-CN',
}

const I18nContext = createContext<I18n>(defaultI18n)

export type { Theme, I18n }
export { ThemeContext, I18nContext, defaultTheme, defaultI18n }
