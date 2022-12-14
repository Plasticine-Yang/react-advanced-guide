/** @description 容器元素的形状 -- 宽高信息 */
type ContainerShape = {
  width: number
  height: number
}

/** @description 海量数据生成配置 */
interface MassiveDataConfig {
  /** @description 数据量 */
  dataCount: number

  /** @description 时间分片的每个时间片渲染的数据量 */
  timeSlicingCount: number
}

export type { ContainerShape, MassiveDataConfig }
