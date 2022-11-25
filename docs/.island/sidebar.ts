import { DefaultTheme } from 'islandjs'

const generateBasics = () => {
  /** @description 生成基础篇文章链接 */
  const generateLink = (name: string) => `/guide/basics/${name}`

  const basics: DefaultTheme.SidebarGroup = {
    text: '基础篇',
    items: [
      {
        text: '认识 JSX',
        link: generateLink('jsx'),
      },
      {
        text: '起源 Component',
        link: generateLink('component'),
      },
    ],
  }

  return basics
}

const sidebar: DefaultTheme.Sidebar = {
  '/guide/': [generateBasics()],
}

export { sidebar }
