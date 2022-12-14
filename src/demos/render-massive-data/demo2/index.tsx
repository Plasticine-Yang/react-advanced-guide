/** @description 渲染海量数据 -- 时间分片 */

import { useState } from 'react'

import { MassiveData } from './MassiveData'
import { Settings } from './Settings'

import { MassiveDataConfig } from './type'

import s from './style.module.scss'

const Demo2: React.FC = () => {
  const [massiveDataConfig, setMassiveDataConfig] = useState<MassiveDataConfig>(
    { dataCount: 100, timeSlicingCount: 50 },
  )
  const { dataCount, timeSlicingCount } = massiveDataConfig

  const handleMassiveDataConfigChange = (
    massiveDataConfig: MassiveDataConfig,
  ) => {
    setMassiveDataConfig(massiveDataConfig)
  }

  return (
    <div className={s.container}>
      <MassiveData dataCount={dataCount} timeSlicingCount={timeSlicingCount} />
      <Settings
        massiveDataConfig={massiveDataConfig}
        onMassiveDataConfigChange={handleMassiveDataConfigChange}
      />
    </div>
  )
}

export { Demo2 }
