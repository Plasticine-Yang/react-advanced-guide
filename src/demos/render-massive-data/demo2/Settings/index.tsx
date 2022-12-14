import { useState } from 'react'

import { MassiveDataConfig } from '../type'

import s from './style.module.scss'

/** @description 海量数据配置表单 */
interface SettingsProps {
  massiveDataConfig: MassiveDataConfig
  onMassiveDataConfigChange: (massiveDataConfig: MassiveDataConfig) => void
}
const Settings: React.FC<SettingsProps> = (props) => {
  const { massiveDataConfig } = props
  const { onMassiveDataConfigChange: emitMassiveDataConfigChange } = props

  // 拷贝副本作为 state
  const [internalMassiveDataConfig, setInternalMassiveDataConfig] =
    useState<MassiveDataConfig>(massiveDataConfig)
  const { dataCount, timeSlicingCount } = internalMassiveDataConfig

  return (
    <div className={s.settings}>
      {/* data-count */}
      <section>
        <label htmlFor="massive-data-settings-data-count">数据量：</label>
        <input
          id="massive-data-settings-data-count"
          type="number"
          value={dataCount}
          onChange={(e) =>
            setInternalMassiveDataConfig({
              ...internalMassiveDataConfig,
              dataCount: Number(e.target.value),
            })
          }
        />
      </section>

      {/* dataCount preset */}
      <section className={s.btnGroup}>
        <button
          onClick={() =>
            setInternalMassiveDataConfig({
              ...internalMassiveDataConfig,
              dataCount: 1000,
            })
          }
        >
          少量
        </button>
        <button
          onClick={() =>
            setInternalMassiveDataConfig({
              ...internalMassiveDataConfig,
              dataCount: 5000,
            })
          }
        >
          中量
        </button>
        <button
          onClick={() =>
            setInternalMassiveDataConfig({
              ...internalMassiveDataConfig,
              dataCount: 20000,
            })
          }
        >
          大量
        </button>
      </section>

      {/* timeSlicingCount */}
      <section>
        <label htmlFor="massive-data-settings-time-slicing-count">
          单个时间片渲染数据量：
        </label>
        <input
          id="massive-data-settings-time-slicing-count"
          type="text"
          value={timeSlicingCount}
          onChange={(e) =>
            setInternalMassiveDataConfig({
              ...internalMassiveDataConfig,
              timeSlicingCount: Number(e.target.value),
            })
          }
        />
      </section>

      <button
        onClick={() => emitMassiveDataConfigChange(internalMassiveDataConfig)}
      >
        保存配置
      </button>
    </div>
  )
}

export { Settings }
