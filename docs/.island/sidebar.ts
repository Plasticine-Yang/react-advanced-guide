import { DefaultTheme } from 'islandjs'

/** @description 基础篇 */
const basicSidebarGroupConfig: SidebarGroupConfig = {
  path: '/guide/basics/',
  displayName: '基础篇',
  items: [
    { text: 'jsx', link: 'jsx' },
    { text: 'component', link: 'component' },
    { text: 'state', link: 'state' },
    { text: 'props', link: 'props' },
    { text: 'life cycle', link: 'life-cycle' },
    { text: 'ref', link: 'ref' },
    { text: 'context', link: 'context' },
    { text: 'HOC', link: 'HOC' },
  ],
}

/** @description 优化篇 */
const optimizationSidebarGroupConfig: SidebarGroupConfig = {
  displayName: '优化篇',
  path: '/guide/optimization/',
  items: [
    { text: '渲染控制', link: 'render-control' },
    { text: '渲染调优', link: 'render-tuning' },
    { text: '渲染海量数据', link: 'render-massive-data' },
  ],
}

/** @description 原理篇 */
const principleSidebarGroupConfig: SidebarGroupConfig = {
  displayName: '原理篇',
  path: '/guide/principle/',
  items: [
    { text: '事件原理 -- 旧版本', link: 'old-event' },
    { text: '事件原理 -- 新版本', link: 'new-event' },
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
    generateSidebarGroup(principleSidebarGroupConfig),
  ],
}

export { sidebar }
