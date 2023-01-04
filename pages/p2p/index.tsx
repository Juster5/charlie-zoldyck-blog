import requestInstance from 'service/fetch'
import { useCallback, useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import Swiper from 'swiper'
import P2PTable from '@/components/BizComponents/P2PTable'
import OKSelector from '@/components/OKSelector'
import Loading from '@/components/Loading'
import Tabs from '@/components/Tabs'
import { slides, currencyList, fiatList } from '../../common/constant'
import './index.scss'

const tabs = [
  {
    title: 'Buy',
    key: 'buy',
  },
  {
    title: 'Sell',
    key: 'sell',
  },
]

export default function P2P() {
  const { t } = useTranslation()
  const [tableData, setTableData] = useState([])
  const [loading, setLoading] = useState(false)
  const [currency, setCurrency] = useState('USDT')
  const [fait, setFait] = useState('AED')
  const [side, setSide] = useState('buy')

  // 初始化轮播图
  useEffect(() => {
    new Swiper('.slide-wrapper', {
      slidesPerView: 'auto',
      spaceBetween: 30,
      freeMode: true,
    })
  }, [])

  // 发送请求
  useEffect(() => {
    setLoading(true)

    requestInstance
      .get('/api/p2p/books', {
        params: {
          currency,
          fait,
          side: side === 'buy' ? 'sell' : 'buy',
          t: new Date().getTime(),
        },
      } as any)
      .then((res: any) => {
        const { code, data } = res
        if (code === 0) {
          const { buy, sell } = data
          setTableData(
            buy && buy.length ? buy : sell && sell.length ? sell : []
          )
        }
      })
      .finally(() => {
        setTimeout(() => {
          setLoading(false)
        }, 300)
      })
  }, [currency, fait, side])

  const memoSetCurrency = useCallback((el: any) => {
    setCurrency(el.title)
  }, [])

  const memoSetFiat = useCallback((el: any) => {
    setFait(el.title)
  }, [])

  const memoSetSide = useCallback((el: any) => {
    setSide(el.key)
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
          <Tabs tabs={tabs} onChange={memoSetSide} />

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

        {loading ? (
          <Loading />
        ) : (
          <P2PTable
            tableData={tableData}
            fait={fait}
            currency={currency}
            side={side}
          />
        )}
      </div>
    </div>
  )
}
