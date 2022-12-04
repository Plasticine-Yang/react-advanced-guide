import { useEffect, useRef } from 'react'
import { createLoggerWithScope } from '~/utils'
import s from './style.module.scss'

const logger = createLoggerWithScope('CacheDataWithRefDemo')

interface TodoItem {
  id: number
  name: string
}

const todoList: TodoItem[] = [
  {
    id: 1,
    name: 'coding',
  },
  {
    id: 2,
    name: 'eating',
  },
  {
    id: 3,
    name: 'sleeping',
  },
  {
    id: 4,
    name: 'playing',
  },
]

const CacheDataWithRefDemo: React.FC = () => {
  const activeTodoItem = useRef(todoList[0])

  // 模拟 componentDidUpdate -- 如果改变 activeTodoItem 后组件没重新渲染，说明视图可以不依赖于 activeTodoItem 数据
  useEffect(() => {
    logger.log('检测组件是否有更新')
  })

  return (
    <div className={s.container}>
      <div className={s.list}>
        {todoList.map((todoItem) => (
          <div
            key={todoItem.id}
            className={s.item}
            onClick={() => (activeTodoItem.current = todoItem)}
          >
            <p>{todoItem.name}</p>
          </div>
        ))}
      </div>

      <button onClick={() => logger.log(activeTodoItem.current)}>
        控制台输出最新的 activeTodoItem
      </button>
    </div>
  )
}

export { CacheDataWithRefDemo }
