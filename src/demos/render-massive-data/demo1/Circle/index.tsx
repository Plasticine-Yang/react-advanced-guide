import { CSSProperties, useMemo } from 'react'

import { ContainerShape } from '../type'

import s from './style.module.scss'

/** @description 圆形色块组件 */
interface CircleProps {
  containerShape: ContainerShape
}
const Circle: React.FC<CircleProps> = (props) => {
  const { containerShape } = props

  const computedStyle = useMemo<CSSProperties>(
    () => ({
      background: genRandomColor(),
      ...genRandomPosition(containerShape),
    }),
    [],
  )

  return <div className={s.circle} style={computedStyle}></div>
}

/** @description 生成随机颜色 */
const genRandomColor = () => {
  const genRandomBranchColor = () => Math.floor(Math.random() * 255)
  const [r, g, b] = new Array(3).fill(0).map(genRandomBranchColor)

  return `rgba(${r}, ${g}, ${b}, 0.8)`
}

/** @description 生成随机位置 */
const genRandomPosition = (circleShape: ContainerShape) => {
  const { width, height } = circleShape

  const genRandomSize = (relative: number) =>
    `${Math.ceil(Math.random() * relative)}px`

  return {
    left: genRandomSize(width),
    top: genRandomSize(height),
  }
}

export { Circle }
