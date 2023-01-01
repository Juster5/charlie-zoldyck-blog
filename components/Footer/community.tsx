import React from 'react'
import { useTranslation } from 'react-i18next'

import { communities } from './constant'

const Community: React.FC = () => {
  const { t } = useTranslation()
  return (
    <div className="okx-footer-community">
      <div className="community-title sm-screen-hidden">
        <span>{t('footer_community')}</span>
      </div>
      {communities.map((el, index) => {
        return <i className={`community-icon ${el.icon}`} key={index} />
      })}
    </div>
  )
}

export default Community
