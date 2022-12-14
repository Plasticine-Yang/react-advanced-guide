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
  const { dataCount } = internalMassiveDataConfig

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
            setInternalMassiveDataConfig({ dataCount: Number(e.target.value) })
          }
        />
      </section>

      {/* dataCount preset */}
      <section className={s.btnGroup}>
        <button
          onClick={() => setInternalMassiveDataConfig({ dataCount: 1000 })}
        >
          少量（不卡顿）
        </button>
        <button
          onClick={() => setInternalMassiveDataConfig({ dataCount: 5000 })}
        >
          中量（轻微卡顿）
        </button>
        <button
          onClick={() => setInternalMassiveDataConfig({ dataCount: 20000 })}
        >
          大量（明显卡顿）
        </button>
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
