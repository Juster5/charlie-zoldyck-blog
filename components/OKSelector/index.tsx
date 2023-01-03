import React, { useCallback, useMemo, useState } from 'react'
// import { useTranslation } from 'react-i18next'
import Image from 'next/image'

import './index.scss'

type menuItem = {
  key?: string // 唯一标识
  icon?: string // 图标
  title?: string // 标题
  value?: string | number
}

type OKSelectorProps = {
  showSearch?: boolean // 是否显示搜索框
  showInput?: boolean // 是否显示左侧的输入框
  menus: menuItem[] // 选择菜单
  onSelect: Function
  // defaultValue?: string | number // 默认值
}

const OKSelector: React.FC<OKSelectorProps> = (props) => {
  const [showMenu, setShowMenu] = useState(false)
  const [searchValue, setSearchValue] = useState('')
  // const { t } = useTranslation()

  const { menus, showSearch, onSelect } = props

  const cacheMenus = useMemo(() => {
    if (searchValue && searchValue.length > 0) {
      const reg = new RegExp(searchValue, 'i')
      return menus.filter((el) => reg.test(el.title as string))
    }
    return menus
  }, [menus, searchValue])

  const triggerSelect = useCallback((el: any) => {
    setShowMenu(false)
    setSearchValue('')
    typeof onSelect === 'function' && onSelect(el)
  }, [])

  const searchMenu = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setSearchValue(value)
  }, [])

  const onblur = useCallback(() => {
    setSearchValue('')
    setShowMenu(false)
  }, [])

  return (
    <div
      className={`okselector-wrapper ${showMenu && ' active'}`}
      onBlur={onblur}
    >
      <div
        className="default-value menu-item"
        onClick={() => {
          setShowMenu(!showMenu)
        }}
      >
        {/* 有图标则渲染图标 */}
        {menus[0]?.icon && (
          <Image
            width={20}
            height={20}
            src={menus[0].icon}
            alt={`${menus[0].title}-icon`}
          />
        )}
        <div className="title">{menus[0].title}</div>
        <span className="okx-header-footer-arrow-chevrons-down"></span>
      </div>
      <div className="menus">
        {showSearch && (
          <div className="search-input">
            <Image
              className="search-icon"
              src="/images/search.png"
              width={16}
              height={16}
              alt="select-icon"
            />
            <input
              value={searchValue}
              onChange={searchMenu}
              className="search-input-content"
              type="text"
            />
          </div>
        )}
        {cacheMenus.map((el, index) => {
          return (
            <div
              className="menu-item select-item"
              key={el.key || index}
              onClick={triggerSelect}
            >
              {el.icon && (
                <Image
                  width={20}
                  height={20}
                  src={el.icon}
                  alt={`${el.title}-icon`}
                />
              )}
              <div className="title">{el.title}</div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default OKSelector
