import axios from 'axios'
import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import Swiper from 'swiper'
import OKTable from '@/components/OKTable'

import { slides } from './constant'

import './index.scss'

export default function P2P() {
  const { t } = useTranslation()

  useEffect(() => {
    axios.get('/api/p2p/buy').then((res) => {
      console.log(res)
    })

    new Swiper('.slide-wrapper', {
      slidesPerView: 'auto',
      spaceBetween: 30,
      freeMode: true,
    })
    
  }, [])

  return (
    <div className="p2p-container">
      {/* 标题区域 */}
      <div className="fixed-header">
        <div className="fixed-header_nav">{t('p2p_title')}</div>
      </div>

      {/* 主内容区域 */}
      <div className="padding-wrapper">
        <div className="session-title">{t('p2p_title')}</div>
        <div className="session-desc">{t('p2p_desc')}</div>

        <div className="slide-wrapper">
          <div className="swiper-wrapper">
            {slides.map((el, index) => {
              return (
                <div
                  className="swiper-slide slide-item"
                  key={index}
                  style={{ backgroundImage: `url(${el.bg})` }}
                >
                  <span className="slide-title" data-name={el.title}>
                    {' '}
                    {t(el.title)}
                  </span>
                  <span className="slide-desc" data-desc={el.desc}>
                    {' '}
                    {t(el.desc)}
                  </span>
                </div>
              )
            })}
          </div>
        </div>

        <OKTable />
      </div>
    </div>
  )
}
