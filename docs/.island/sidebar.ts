import { DefaultTheme } from 'islandjs'

/** @description 基础篇 */
const basicSidebarGroupConfig: SidebarGroupConfig = {
  path: '/guide/basics/',
  displayName: '基础篇',
  items: [
    {
      text: 'jsx',
      link: 'jsx',
    },
    {
      text: 'component',
      link: 'component',
    },
    {
      text: 'state',
      link: 'state',
    },
    {
      text: 'props',
      link: 'props',
    },
    {
      text: 'life cycle',
      link: 'life-cycle',
    },
    {
      text: 'ref',
      link: 'ref',
    },
    {
      text: 'context',
      link: 'context',
    },
    {
      text: 'HOC',
      link: 'HOC',
    },
  ],
}

/** @description 优化篇 */
const optimizationSidebarGroupConfig: SidebarGroupConfig = {
  displayName: '优化篇',
  path: '/guide/optimization/',
  items: [
    { text: '渲染控制', link: 'render-control' },
    { text: '渲染调优', link: 'render-tuning' },
  ],
}

interface SidebarGroupConfig {
  /** @description 分类文档存储路径 */
  path: string

  /** @description 分类展示时的名字 */
  displayName: string

  /** @description 分类下的文档配置 */
  items: DefaultTheme.SidebarItem[]
}
const generateSidebarGroup = (config: SidebarGroupConfig) => {
  const { path, displayName, items } = config
  const generateLink = (name: string) => `${path}${name}`

  const sidebarGroup: DefaultTheme.SidebarGroup = {
    text: displayName,

    items: items.map((item) => ({
      text: item.text,
      link: generateLink(item.link ?? 'not-found'),
    })),
  }

  return sidebarGroup
}

const sidebar: DefaultTheme.Sidebar = {
  '/guide/': [
    generateSidebarGroup(basicSidebarGroupConfig),
    generateSidebarGroup(optimizationSidebarGroupConfig),
  ],
}

export { sidebar }
