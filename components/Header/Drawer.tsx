import React from 'react'
import './index.scss'

type DrawerPropsType = {
  children: any
  isShow?: boolean
  rightMenuClick: Function
}
const Drawer: React.FC<DrawerPropsType> = ({
  children,
  isShow = true,
  rightMenuClick,
}) => {
  return (
    <div className={`drawer-wrapper ${isShow ? 'show' : ''}`}>
      <div
        className="okx-header-footer-close"
        onClick={() => {
          rightMenuClick()
        }}
      ></div>
      {children}
    </div>
  )
}

export default Drawer
