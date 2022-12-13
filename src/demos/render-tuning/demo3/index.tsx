/** @description 使用 Suspense + React.lazy 实现异步组件 */

import { Suspense } from 'react'
import { AsyncComponent } from './AsyncComponent'

interface ApiData {
  name: string
  age: number
}

/** @description 模拟 api */
const fetchData = () => {
  return new Promise<ApiData>((resolve) => {
    setTimeout(() => {
      resolve({
        name: 'plasticine',
        age: 21,
      })
    }, 3000)
  })
}

interface FooProps {
  id: number
  apiData: ApiData
}
const Foo: React.FC<FooProps> = (props) => {
  const { id, apiData } = props
  const { name, age } = apiData

  return (
    <div>
      <p>id: {id}</p>
      <p>name: {name}</p>
      <p>age: {age}</p>
    </div>
  )
}

const Loading: React.FC = () => {
  return <div>Loading...</div>
}

const Demo3: React.FC = () => {
  const AsyncFoo = AsyncComponent(Foo, fetchData)

  return (
    <Suspense fallback={<Loading />}>
      <AsyncFoo />
    </Suspense>
  )
}

export { Demo3 }
