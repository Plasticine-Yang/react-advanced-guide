import { useContext, useState } from 'react'

import {
  defaultI18n,
  defaultTheme,
  I18n,
  I18nContext,
  Theme,
  ThemeContext,
} from './context'

const NestedContextDemo: React.FC = () => {
  const [theme] = useState<Theme>(defaultTheme)
  const [i18n, setI18n] = useState<I18n>(defaultI18n)

  const handleChangeLanguage = () => {
    const { lang } = i18n

    if (lang === 'zh-CN') setI18n({ lang: 'en-US' })
    else setI18n({ lang: 'zh-CN' })
  }

  // 嵌套使用多个 context
  return (
    <div>
      <ThemeContext.Provider value={theme}>
        <I18nContext.Provider value={i18n}>
          <Consumer />
        </I18nContext.Provider>
      </ThemeContext.Provider>

      <button onClick={() => handleChangeLanguage()}>toggle language</button>
    </div>
  )
}

const Consumer: React.FC = () => {
  const { color, background } = useContext(ThemeContext)
  const { lang } = useContext(I18nContext)

  return (
    <div style={{ color, background }}>
      <p>
        {lang === 'zh-CN'
          ? '你好世界'
          : lang === 'en-US'
          ? 'Hello World'
          : 'unknown language'}
      </p>
    </div>
  )
}

export { NestedContextDemo }
