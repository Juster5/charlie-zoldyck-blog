import React from 'react'
import style from './index.scss'

type CollpaseMenuProps = {
  children: any,
  menu?: []
}

const CollpaseMenu: React.FC<CollpaseMenuProps> = (props) => {
  return (
    <>
      <div className={style['collpase-trigger']}>
      {
        props.children
      }
      </div>
    </>
  )
}

export default CollpaseMenu