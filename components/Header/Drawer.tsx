import React from 'react'
import './index.scss'

type menuItem = {
  title?: string
  children: {
    title: ''
  }[]
}

type DrawerProps = {
  menu?: menuItem[]
}

const Drawer: React.FC<DrawerProps> = (props) => {
  return (
    <div className='collpase-wrapper'>
 
    </div>
  )
}

export default Drawer