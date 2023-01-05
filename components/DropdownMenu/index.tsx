import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'

import './index.scss'

type MenuItemType = {
  title: string
  children: {
    title: string
    subTitle?: string
  }[]
}

type DropdownMenuProps = {
  menu: MenuItemType[]
}

const DropdownMenu: React.FC<DropdownMenuProps> = ({ menu }) => {
  const [expandIndexs, setExpandIndexs] = useState<any>({})

  const clickMenu = (index: any) => {
    if (!expandIndexs[index]) {
      expandIndexs[index] = true
      setExpandIndexs({
        ...expandIndexs,
      })
    } else {
      expandIndexs[index] = false
      setExpandIndexs({
        ...expandIndexs,
      })
    }
  }

  const { t } = useTranslation()

  return (
    <ul className="okx-dropdown-menu">
      {menu?.map((el, index) => {
        return (
          <li
            key={el.title + index}
            className={`${expandIndexs[el.title] ? 'expand' : ''}`}
          >
            {/* 主标题 */}
            <div
              className="menu-item"
              onClick={() => {
                clickMenu(el.title)
              }}
            >
              <div className="menu-item-title">{t(el.title)}</div>
              {el.children && el.children.length > 0 && (
                <div className="menu-arrow okx-header-footer-arrow-chevrons-down"></div>
              )}
            </div>

            {/* 二级标题 */}
            {el.children && el.children.length > 0 && (
              <div className="sub-item-wrapper">
                {el.children.map((subEl, index) => {
                  return (
                    <div className="sub-item" key={subEl.title + index}>
                      {t(subEl.title)}
                    </div>
                  )
                })}
              </div>
            )}
          </li>
        )
      })}
    </ul>
  )
}

export default React.memo(DropdownMenu)
