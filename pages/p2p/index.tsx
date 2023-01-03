import requestInstance from 'service/fetch'
import { useCallback, useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import Swiper from 'swiper'
import { slides, currencyList, fiatList } from '../../common/constant'
import P2PTable from '@/components/BizComponents/P2PTable'
import OKSelector from '@/components/OKSelector'

import './index.scss'

export default function P2P() {
  const { t } = useTranslation()
  const [tableData, setTableData] = useState([])

  const [currency, setCurrency] = useState('USDT')
  const [fait, setFait] = useState('AED')

  useEffect(() => {
    requestInstance
      .get('/api/p2p/buy', {
        currency,
        fait,
      } as any)
      .then((res: any) => {
        const { code, data } = res
        if (code === 0) {
          setTableData(data.buy ? data.buy : [])
        }
      })

    new Swiper('.slide-wrapper', {
      slidesPerView: 'auto',
      spaceBetween: 30,
      freeMode: true,
    })
  }, [currency, fait])

  const memoSetCurrency = useCallback((el: any) => {
    setCurrency(el.title)
  }, [])

  const memoSetFiat = useCallback((el: any) => {
    setFait(el.title)
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

        {/* 过滤器区域 */}
        <div className="filter-content">
          <OKSelector
            menus={currencyList}
            showSearch={true}
            onSelect={memoSetCurrency}
          />
          <OKSelector
            menus={fiatList}
            showSearch={true}
            onSelect={memoSetFiat}
          />
        </div>

        <P2PTable tableData={tableData} fait={fait} currency={currency} />
      </div>
    </div>
  )
}
