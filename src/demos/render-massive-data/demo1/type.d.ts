/** @description 容器元素的形状 -- 宽高信息 */
type ContainerShape = {
  width: number
  height: number
}

/** @description 海量数据生成配置 */
interface MassiveDataConfig {
  dataCount: number
}

export type { ContainerShape, MassiveDataConfig }
