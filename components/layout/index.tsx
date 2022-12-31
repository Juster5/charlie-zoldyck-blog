// import type { NextPage } from 'next';
import React from 'react'
import Header from 'components/Header'
import Footer from 'components/Footer'

type LayoutProps = {
  children: React.ReactNode,
  className: string
}

const Layout = (props: LayoutProps) => {
  return (
    <div className={props.className}>
      <Header />
      <main>{props.children}</main>
      <Footer />
    </div>
  )
}

export default Layout
