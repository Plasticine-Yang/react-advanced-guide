import { DefaultTheme } from 'islandjs'

const generateBasics = () => {
  /** @description 生成基础篇文章链接 */
  const generateLink = (name: string) => `/guide/basics/${name}`

  const basics: DefaultTheme.SidebarGroup = {
    text: '基础篇',
    items: [
      {
        text: 'jsx',
        link: generateLink('jsx'),
      },
      {
        text: 'component',
        link: generateLink('component'),
      },
      {
        text: 'state',
        link: generateLink('state'),
      },
      {
        text: 'props',
        link: generateLink('props'),
      },
      {
        text: 'life cycle',
        link: generateLink('life-cycle'),
      },
      {
        text: 'ref',
        link: generateLink('ref'),
      },
      {
        text: 'context',
        link: generateLink('context'),
      },
      {
        text: 'HOC',
        link: generateLink('HOC'),
      },
    ],
  }

  return basics
}

const sidebar: DefaultTheme.Sidebar = {
  '/guide/': [generateBasics()],
}

export { sidebar }
