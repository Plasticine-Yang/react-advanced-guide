/** @description 渲染海量数据 -- 无任何优化 */

import { useState } from 'react'

import { MassiveData } from './MassiveData'
import { Settings } from './Settings'

import { MassiveDataConfig } from './type'

import s from './style.module.scss'

const Demo1: React.FC = () => {
  const [massiveDataConfig, setMassiveDataConfig] = useState<MassiveDataConfig>(
    { dataCount: 100 },
  )
  const { dataCount } = massiveDataConfig

  const handleMassiveDataConfigChange = (
    massiveDataConfig: MassiveDataConfig,
  ) => {
    setMassiveDataConfig(massiveDataConfig)
  }

  return (
    <div className={s.container}>
      <MassiveData dataCount={dataCount} />
      <Settings
        massiveDataConfig={massiveDataConfig}
        onMassiveDataConfigChange={handleMassiveDataConfigChange}
      />
    </div>
  )
}

export { Demo1 }
