import { useEffect, useState } from 'react'
import { createLoggerWithScope } from '~/utils'

import ScrollView from './scroll-view'
import { fetchData } from './fetch-data'
import { ItemData, ScrollViewItem } from './scroll-view/scroll-view.d'

const logger = createLoggerWithScope('ScrollViewClassComponentDemo')

/** @description 列表项视图 */
const ItemComponent: React.FC<{ data: ItemData }> = (props) => {
  const { title, cover, price } = props.data

  return (
    <div
      style={{ display: 'flex', justifyContent: 'space-between', gap: '30px' }}
    >
      <img src={cover} style={{ maxHeight: '80px' }} />

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
      >
        <div>{title}</div>
        <div>￥ {price}</div>
      </div>
    </div>
  )
}

const ScrollViewClassComponentDemo: React.FC = () => {
  const [list, setList] = useState<ScrollViewItem<ItemData>[]>([])
  const [page, setPage] = useState(0)

  const loadData = async () => {
    const res = await fetchData(page)
    if (res.code === 0) {
      setList((list) => list.concat(res.list))

      // 下次加载下一页
      setPage(res.page + 1)
    } else {
      logger.log('无数据了')
    }
  }

  const handleScrollToBottom = () => {
    logger.log('滚动到底部了')
    loadData()
  }

  // 只在初始化时加载一次数据
  useEffect(() => {
    loadData()
  }, [])

  return (
    <div>
      <ScrollView
        list={list}
        itemComponent={ItemComponent}
        maxHeight="400px"
        onScrollToBottom={handleScrollToBottom}
      />
    </div>
  )
}

export { ScrollViewClassComponentDemo }
