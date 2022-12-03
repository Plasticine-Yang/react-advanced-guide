import React from 'react'
import { debounce } from '~/utils'

import { ScrollViewProps, ScrollViewState } from './scroll-view'

class ScrollView extends React.Component<ScrollViewProps, ScrollViewState> {
  // ================ 属性 ================

  // 根 DOM 元素结点的引用
  rootEl: HTMLElement | null = null

  // ================ 事件处理方法 ================

  handleScroll(e: Event) {
    // emit scroll 事件给外界
    const { onScroll: emitScroll = () => {} } = this.props
    emitScroll && emitScroll(e)

    // 检测滚动条是否触底
    this.checkScrollToBottom()
  }

  // ================ 普通方法 ================

  /** @description 检测滚动条是否触底 -- 触底则 emit scroll-to-bottom 事件 */
  checkScrollToBottom() {
    const { onScrollToBottom: emitScrollToBottom } = this.props
    const { scrollHeight, scrollTop, offsetHeight } = this.rootEl!

    // 触底条件
    if (scrollHeight <= scrollTop + offsetHeight) {
      emitScrollToBottom && emitScrollToBottom()
    }
  }

  // ================ 生命周期 ================
  constructor(props: ScrollViewProps) {
    super(props)

    // 初始化 state
    this.state = {
      list: [],
    }

    // handleScroll 方法防抖处理
    this.handleScroll = this.handleScroll.bind(this)
    this.handleScroll = debounce(this.handleScroll, 200)
  }

  /** @description 根据 props 派生 state */
  static getDerivedStateFromProps(nextProps: ScrollViewProps): ScrollViewState {
    return {
      list: nextProps.list ?? [],
    }
  }

  /** @description 绑定事件监听器 */
  componentDidMount(): void {
    this.rootEl!.addEventListener('scroll', this.handleScroll)
  }

  /** @description 仅当 props.list 变化才更新渲染组件 */
  shouldComponentUpdate(
    _: Readonly<ScrollViewProps>,
    nextState: Readonly<ScrollViewState>,
  ): boolean {
    return nextState.list !== this.state.list
  }

  /** @description 保存组件更新前的容器高度 */
  getSnapshotBeforeUpdate() {
    return this.rootEl!.scrollHeight
  }

  /** @description 计算组件更新前后的容器高度变化量 */
  componentDidUpdate(
    prevProps: Readonly<ScrollViewProps>,
    prevState: Readonly<ScrollViewState>,
    snapshot?: number,
  ): void {
    if (this.rootEl?.scrollHeight !== undefined && snapshot !== undefined) {
      console.log(`容器高度变化量: ${this.rootEl.scrollHeight - snapshot}`)
    }
  }

  /** @description 解除事件监听器 */
  componentWillUnmount(): void {
    this.rootEl?.removeEventListener('scroll', this.handleScroll)
  }

  render(): React.ReactNode {
    const { list } = this.state
    const { itemComponent, maxHeight = '300px' } = this.props

    /**
     * React 将在组件挂载时，会调用 ref 回调函数并传入 DOM 元素，当卸载时调用它并传入 null。
     * 在 componentDidMount 或 componentDidUpdate 触发前，React 会保证 refs 一定是最新的。
     */
    return (
      <div
        style={{ maxHeight, overflowY: 'scroll' }}
        ref={(el) => (this.rootEl = el)}
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
          {list.map((item) =>
            React.createElement(itemComponent, {
              key: item.id,
              data: item.data,
            }),
          )}
        </div>
      </div>
    )
  }
}

export default ScrollView
