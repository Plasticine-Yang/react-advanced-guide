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
      {
        text: '玄学 state',
        link: generateLink('state'),
      },
      {
        text: '深入 Props',
        link: generateLink('props'),
      },
      {
        text: '理解生命周期',
        link: generateLink('life-cycle'),
      },
    ],
  }

  return basics
}

const sidebar: DefaultTheme.Sidebar = {
  '/guide/': [generateBasics()],
}

export { sidebar }
