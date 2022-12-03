import React from 'react'

export interface ScrollViewItem<T> {
  id: string | number
  data: T
}

type ScrollViewList = ScrollViewItem[]

interface ScrollViewItemProps {
  data: any
}

export interface ScrollViewProps {
  /** @description 数据列表 */
  list: ScrollViewList

  /** @description 数据项渲染组件 */
  itemComponent: any

  /** @description 最大高度 */
  maxHeight?: string

  /** @description 滚动回调 */
  onScroll?: (e: Event) => void

  /** @description 滚动到底部时的回调 */
  onScrollToBottom?: () => void
}

export interface ScrollViewState {
  list: ScrollViewList
}

export interface ItemData {
  title: string
  cover: string
  price: number
}
