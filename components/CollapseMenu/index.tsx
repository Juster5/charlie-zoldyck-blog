import React from 'react'
import './index.scss'

type menuItem = {
  icon?: string
  title?: string
  subTitle?: string
}

type CollpaseMenuProps = {
  children: any
  menu?: menuItem[]
  position?: 'center' | 'left' | 'right'
}

const CollpaseMenu: React.FC<CollpaseMenuProps> = (props) => {
  return (
    <div className="collpase-wrapper">
      <div className="collpase-trigger">{props.children}</div>
      {props.menu && props.menu.length && (
        <div
          className={`collpase-menu collpase-${
            props.position ? props.position : 'center'
          }`}
        >
          {props.menu?.map((el, index) => {
            return (
              <div className="menu-item" key={index}>
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
