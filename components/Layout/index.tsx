// import type { NextPage } from 'next';
import React from 'react'
import Header from 'components/Header'
import Footer from 'components/Footer'
import './index.scss'

type LayoutProps = {
  children: React.ReactNode
}

const Layout = (props: LayoutProps) => {
  return (
    <div className="okx-app">
      <Header />
      <main>{props.children}</main>
      <Footer />
    </div>
  )
}

export default React.memo(Layout)
