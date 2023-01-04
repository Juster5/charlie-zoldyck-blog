import type { NextPage } from 'next'
import React from 'react'
import { useTranslation } from 'react-i18next'

import DropdownMenu from '../DropdownMenu'
import Community from './community'

import { navs } from './constant'
import './index.scss'

const Footer: NextPage = () => {
  const { t } = useTranslation()

  return (
    <div className="okx-footer">
      <div className="pc-footer sm-screen-hidden">
        <ul className="list-wrapper">
          {navs.map((el, index) => {
            return (
              <li className="list-item" key={index}>
                <p className="list-item__title">{t(el.title)}</p>
                <ul className="link-list">
                  {el.children.map((el, index) => {
                    return (
                      <li className="link-item" key={el.title + index}>
                        {t(el.title)}
                      </li>
                    )
                  })}
                </ul>
              </li>
            )
          })}
        </ul>
      </div>

      <div className="mobile-footer bg-screen-hidden">
        <DropdownMenu menu={navs} />
      </div>

      <Community />
    </div>
  )
}

export default React.memo(Footer)
