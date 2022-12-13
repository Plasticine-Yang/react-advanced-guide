/** @description 使用 Suspense */

import { FC, lazy, Suspense } from 'react'

const Demo1: React.FC = () => {
  return (
    <Suspense fallback={<Loading />}>
      <LazyComponent />
    </Suspense>
  )
}

const sleep = async (timeout: number) =>
  new Promise((resolve) => setTimeout(resolve, timeout))

const LazyComponent = lazy(async () => {
  await sleep(4000)
  return import('./foo')
})

const Loading: React.FC = () => {
  return <div>Loading...</div>
}

export { Demo1 }
