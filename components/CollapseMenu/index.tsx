import React from 'react'
import './index.scss'

type menuItem =
  | {
      icon?: string // 图标
      title?: string // 标题
      subTitle?: string // 子标题
    }
  | any

type CollpaseMenuProps = {
  children: any // 渲染的子元素
  menu?: menuItem[] // 下拉菜单按钮
  position?: 'center' | 'left' | 'right' // 下拉菜单的位置
  menuClick?: Function // 菜单选择事件
}

const CollpaseMenu: React.FC<CollpaseMenuProps> = (props) => {
  return (
    <div className="collpase-wrapper">
      {props.children}
      {props.menu && props.menu.length && (
        <div
          className={`collpase-menu collpase-${
            props.position ? props.position : 'center'
          }`}
        >
          {props.menu?.map((el, index) => {
            return (
              <div
                className="menu-item"
                key={index}
                onClick={() => {
                  props.menuClick && props.menuClick(el)
                }}
              >
                {el.icon && <div className={`menu-item__icon  ${el.icon}`} />}
                <div className="menu-item__text">
                  <div className="title">{el.title}</div>
                  <div className="sub-title">{el.subTitle}</div>
                </div>
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}

export default CollpaseMenu
