import { Component, createRef, ReactNode } from 'react'

import { ContainerShape } from '../type'

import { Circle } from '../Circle'

import s from './style.module.scss'

interface MassiveDataProps {
  /** @description 数据量 */
  dataCount: number
}
interface MassiveDataState {
  /** @description 容器元素形状信息 */
  containerShape: ContainerShape

  /** @description 渲染列表 */
  dataList: number[]
}
class MassiveData extends Component<MassiveDataProps, MassiveDataState> {
  state: Readonly<MassiveDataState> = {
    containerShape: { width: 0, height: 0 },
    dataList: [],
  }

  el = createRef<HTMLDivElement>()

  refresh() {
    // 获取容器元素的宽高
    const { offsetWidth, offsetHeight } = this.el.current!

    // 生成渲染列表
    const { dataCount } = this.props
    const dataList = new Array(dataCount).fill(666)

    this.setState({
      containerShape: {
        width: offsetWidth,
        height: offsetHeight,
      },

      dataList,
    })
  }

  /** @description 生成渲染列表 */
  componentDidMount(): void {
    this.refresh()
  }

  componentDidUpdate(prevProps: Readonly<MassiveDataProps>): void {
    const { dataCount } = prevProps
    if (dataCount !== this.props.dataCount) {
      this.refresh()
    }
  }

  render(): ReactNode {
    const { dataList, containerShape } = this.state

    /** @description 根据渲染列表得到的视图元素列表 */
    const renderList = () =>
      dataList.map((_, idx) => (
        <Circle containerShape={containerShape} key={idx} />
      ))

    return (
      <div ref={this.el} className={s.massiveData}>
        {renderList()}
      </div>
    )
  }
}

export { MassiveData }
