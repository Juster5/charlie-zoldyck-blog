import React, {
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react'
// import { useTranslation } from 'react-i18next'
import Image from 'next/image'
import { avoidScollingOverflow } from 'common/util'
import { GloablContext } from '../GloablContextProvider'

import './index.scss'
import { SM } from 'common/constant'

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
  const { menus, showSearch, onSelect } = props

  const [showMenu, setShowMenu] = useState(false)
  const [searchValue, setSearchValue] = useState('')
  const [selectValue, setSelectValue] = useState(menus[0])
  const { responseSize } = useContext(GloablContext)
  // const { t } = useTranslation()

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
    setSelectValue(el)
    typeof onSelect === 'function' && onSelect(el)
  }, [])

  const searchMenu = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setSearchValue(value)
  }, [])

  useEffect(() => {
    const clear = () => {
      setSearchValue('')
      setShowMenu(false)
    }
    document.addEventListener('click', clear)

    return () => {
      document.removeEventListener('click', clear)
    }
  }, [])

  useEffect(() => {
    if (showMenu && responseSize === SM) {
      return avoidScollingOverflow()
    }
  }, [showMenu, responseSize])

  return (
    <div
      className={`okselector-wrapper ${showMenu && ' active'}`}
      onClick={(e) => {
        e.stopPropagation()
      }}
    >
      <div
        className="default-value menu-item"
        onClick={() => {
          setShowMenu(!showMenu)
        }}
      >
        {/* 有图标则渲染图标 */}
        {selectValue?.icon && (
          <Image
            width={20}
            height={20}
            src={selectValue.icon as string}
            alt={`${selectValue.title}-icon`}
          />
        )}
        <div className="title">{selectValue.title}</div>
        <span className="okx-header-footer-arrow-chevrons-down"></span>
      </div>
      <div className="menus">
        {showSearch && (
          <div className="search-input">
            <div className="search-icon">
              <Image
                src="/images/search.png"
                width={16}
                height={16}
                alt="select-icon"
              />
            </div>
            <input
              value={searchValue}
              onChange={searchMenu}
              className="search-input-content"
              type="text"
              placeholder="search"
            />
          </div>
        )}
        <div className="scroll-wrapper">
          {cacheMenus.map((el, index) => {
            return (
              <div
                className="menu-item select-item"
                key={el.key || el.title || index}
                onClick={() => {
                  triggerSelect(el, index)
                }}
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
    </div>
  )
}

export default OKSelector
