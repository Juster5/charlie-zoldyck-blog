import type { NextPage } from 'next'
// @ts-ignore
import Cookies from 'js-cookie'
import Link from 'next/link'
import Image from 'next/image'
import { useCallback, useEffect, useState, useContext } from 'react'
import { useTranslation } from 'react-i18next'
import { avoidScollingOverflow } from 'common/util'
import { BG, langs } from 'common/constant'

import CollpaseMenu from '../CollapseMenu'
import DropdownMenu from '../DropdownMenu'
import Drawer from './Drawer'
import { navs } from './constant'
import { GloablContext } from '../GloablContextProvider'

import './index.scss'
import React from 'react'

const Header: NextPage = () => {
  const { t, i18n } = useTranslation()

  const [showDrawer, setShowDrawer] = useState(false)

  const { lang, setLang, responseSize } = useContext(GloablContext)

  console.log('==================')
  console.log(responseSize)
  console.log('==================')
  
  const clickMenu = useCallback(() => {
    setShowDrawer(true)
  }, [])

  const closeDrawer = useCallback(() => {
    setShowDrawer(false)
  }, [])

  // 全屏时, 防止穿屏滚动
  useEffect(() => {
    if (showDrawer) {
      return avoidScollingOverflow()
    }
  }, [showDrawer])

  const changeLang = (lang: string) => {
    // 不存在语言包, 则加载语言包, 然后切换语言
    if (i18n.languages.indexOf(lang) === -1) {
      i18n.loadLanguages(lang, () => {
        i18n.changeLanguage(lang)
        Cookies.set('locale', lang)
      })
    } else {
      // 否则直接切换语言
      i18n.changeLanguage(lang)
      Cookies.set('locale', lang)
    }
    setLang(lang)
  }

  return (
    <>
      <header className="okx-header">
        {/* logo区域 */}
        <div className="logo-wrapper">
          <Link href={'/'}>
            <Image src="/images/logo.png" alt="OKX" width={82} height={36} />
          </Link>
        </div>

        {/* pc端导航栏区域 */}
        <div className="pc-navs">
          {navs.map((el) => {
            return (
              <CollpaseMenu
                menu={el.children}
                key={el.title}
                showInColumn={el.children.length > 6}
              >
                <div className="nav-item">
                  <span>{t(el.title)}</span>
                  {el.children && el.children.length > 0 && (
                    <span className="title-arrow okx-header-footer-arrow-chevrons-down"></span>
                  )}
                </div>
              </CollpaseMenu>
            )
          })}
        </div>

        {/* 登录区域 */}
        <div className="login-wrapper">
          <span className="login mr12">
            {t('common_login')}
          </span>
          <span className="signup">{t('common_signup')}</span>
          <span
            className="menu okx-header-footer-hamburger"
            onClick={clickMenu}
          ></span>
        </div>

        {/* 多语言区域 */}
        {responseSize === BG && <CollpaseMenu
          position="right"
          menu={langs}
          menuClick={(el: any) => {
            changeLang(el.key)
          }}
        >
          <div className="languages">
            <span className="okx-header-footer-language"></span>
          </div>            
        </CollpaseMenu>}
      </header>

      {/* 移动端菜单区域 */}
      <Drawer isShow={showDrawer} rightMenuClick={closeDrawer}>
        <div className="login-wrapper">
          <span className="signup mr12">{t('common_signup')}</span>
          <span className="login">{t('common_login')}</span>
        </div>

        <div className="mobile-language">
          {langs.map((el) => {
            return (
              <div
                className={`mobile-lang-btn ${el.key === lang ? 'active' : ''}`}
                key={el.key}
                onClick={() => {
                  changeLang(el.key)
                }}
              >
                {el.title}
              </div>
            )
          })}
        </div>

        {<DropdownMenu menu={navs} />}
      </Drawer>
    </>
  )
}

export default React.memo(Header)
