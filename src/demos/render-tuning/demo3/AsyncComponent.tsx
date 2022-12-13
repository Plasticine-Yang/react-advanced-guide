/** @description 使用 Suspense + React.lazy 实现异步组件 */

import React, { ComponentType, lazy } from 'react'

const AsyncComponent = <T, P>(
  Component: ComponentType<P>,
  api: () => Promise<T>,
) => {
  const AsyncComponentPromise = () =>
    new Promise<{ default: ComponentType<any> }>(async (resolve) => {
      const apiData = await api()
      resolve({
        default: (props: any) => <Component apiData={apiData} {...props} />,
      })
    })

  return lazy(AsyncComponentPromise)
}

export { AsyncComponent }
