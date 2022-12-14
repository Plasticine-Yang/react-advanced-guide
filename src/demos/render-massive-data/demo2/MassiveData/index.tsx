import { Component, createRef, Fragment, ReactNode } from 'react'

import { ContainerShape, MassiveDataConfig } from '../type'

import { Circle } from '../Circle'

import s from './style.module.scss'

type MassiveDataProps = MassiveDataConfig
interface MassiveDataState {
  /** @description 容器元素形状信息 */
  containerShape: ContainerShape

  /** @description 数据列表 */
  dataList: number[]

  /** @description 渲染列表 */
  renderList: any[]
}
class MassiveData extends Component<MassiveDataProps, MassiveDataState> {
  state: Readonly<MassiveDataState> = {
    containerShape: { width: 0, height: 0 },
    dataList: [],
    renderList: [],
  }

  el = createRef<HTMLDivElement>()

  /** @description 刷新视图 */
  refresh() {
    const { timeSlicingCount } = this.props

    // 获取容器元素的宽高
    const { offsetWidth, offsetHeight } = this.el.current!

    // 生成渲染列表
    const { dataCount } = this.props
    const dataList = new Array(dataCount).fill(666)

    // 计算需要多少个时间片
    const times = Math.ceil(dataList.length / timeSlicingCount)

    this.setState(
      {
        containerShape: {
          width: offsetWidth,
          height: offsetHeight,
        },

        dataList,

        // 每次 refresh 需要清空之前缓存的 renderList
        renderList: [],
      },

      () => {
        // 数据列表更新后启动时间分片渲染流程
        this.renderListByTimeSlicing(1, times)
      },
    )
  }

  /**
   * @description 时间分片渲染流程
   * @param timeSliceIdx 当前所在的时间分片下标 -- 从 1 开始
   * @param times 总共的时间片数量
   */
  renderListByTimeSlicing(timeSliceIdx: number, times: number) {
    // base case: 所有时间片渲染完毕则没必要再渲染
    if (timeSliceIdx > times) return

    // 往 this.state.renderList 中添加数据进行缓存，方便后续渲染时直接复用
    const { renderList } = this.state
    renderList.push(this.renderTimeSlice(timeSliceIdx))

    // 更新 renderList 触发当前时间片对应的视图更新
    this.setState({
      renderList,
    })

    // 在 requestIdleCallback 中递归渲染后续时间片
    requestIdleCallback(() => {
      this.renderListByTimeSlicing(++timeSliceIdx, times)
    })
  }

  /** @description 渲染时间片 */
  renderTimeSlice(timeSliceIdx: number) {
    const { dataList, containerShape } = this.state
    const { timeSlicingCount } = this.props

    // 截取出当前时间片对应的数据列表
    const targetDataList = dataList.slice(
      (timeSliceIdx - 1) * timeSlicingCount,
      timeSliceIdx * timeSlicingCount,
    )

    return (
      <Fragment key={timeSliceIdx}>
        {targetDataList.map((_, idx) => (
          <Circle
            containerShape={containerShape}
            key={`${timeSliceIdx}-${idx}`}
          />
        ))}
      </Fragment>
    )
  }

  /** @description 生成渲染列表 */
  componentDidMount(): void {
    this.refresh()
  }

  componentDidUpdate(prevProps: Readonly<MassiveDataProps>): void {
    const { dataCount, timeSlicingCount } = prevProps
    const { dataCount: nextDataCount, timeSlicingCount: nextTimeSlicingCount } =
      this.props

    // 仅当 dataCount 或 timeSlicingCount 发生变化时才重新渲染
    if (
      dataCount !== nextDataCount ||
      timeSlicingCount !== nextTimeSlicingCount
    ) {
      this.refresh()
    }
  }

  render(): ReactNode {
    const { renderList } = this.state

    return (
      <div ref={this.el} className={s.massiveData}>
        {renderList}
      </div>
    )
  }
}

export { MassiveData }
