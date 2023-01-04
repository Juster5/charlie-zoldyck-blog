import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'

type TabItemType = {
  title: string
  key: string
}

type TabsProps = {
  tabs: TabItemType[]
  defaultKey?: string
  onChange?: Function
}

import './index.scss'

const Tabs: React.FC<TabsProps> = ({ tabs, onChange, defaultKey }) => {
  const [activeKey, setActiveKey] = useState(defaultKey || tabs[0].key)
  const { t } = useTranslation()

  return (
    <div className="okx-tabs">
      {tabs.map((el) => {
        return (
          <div
            className={`tab-item ${activeKey === el.key && 'active'}`}
            key={el.key}
            onClick={() => {
              setActiveKey(el.key)
              typeof onChange === 'function' && onChange(el)
            }}
          >
            {t(el.title)}
          </div>
        )
      })}
    </div>
  )
}

export default React.memo(Tabs)
