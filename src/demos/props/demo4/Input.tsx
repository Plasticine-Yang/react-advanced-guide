/**
 * @description 表单项中的插槽组件 -- FormItem 只会渲染 Input 组件，其他组件会被忽略
 */
interface InputProps {
  value?: string

  onChange?: (value: string) => void
}
const Input: React.FC<InputProps> = (props) => {
  const { value } = props
  const { onChange: emitChange } = props

  return (
    <input
      type="text"
      value={value}
      onChange={(e) => emitChange && emitChange(e.target.value)}
    />
  )
}

// 起到标识作用 用于父组件条件渲染插槽时使用
Input.displayName = 'Input'

export type { InputProps }
export { Input }
