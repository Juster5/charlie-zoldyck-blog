import requestInstance from 'service/fetch'
import { useEffect, useMemo, useState } from 'react'
import { useTranslation } from 'react-i18next'
import Swiper from 'swiper'
import OKTable from '@/components/OKTable'

import { slides, payMethodColor } from '../../common/constant'

import './index.scss'

export default function P2P() {
  const { t } = useTranslation()
  const [tableData, setTableData] = useState([])
  const [currency, setCurrency] = useState('USDT')
  const [fait, setFait] = useState('AED')

  const column = useMemo(() => {
    return [
      {
        title: 'Advertisers',
        render(item: any) {
          return (
            <div className="advertisers">
              <div className="advertisers-icon">
                {item.nickName.slice(0, 1)}
              </div>
              <div className="advertisers-desc">
                <div className="desc__nickname">
                  {item.nickName}
                  {item.verificationType === 0 && (
                    <img
                      className="nickname-icon"
                      src="https://static.okx.com/cdn/assets/imgs/225/23D4D3F3419206E1.png"
                    />
                  )}
                </div>
                <div className="desc__orders">
                  {t('order', {
                    count: item.completedOrderQuantity,
                  })}{' '}
                  | {(item.completedRate * 100).toFixed(2)}% completion rate
                </div>
              </div>
            </div>
          )
        },
      },
      {
        title: 'Available/Order limit',
        render(item: any) {
          return <div className='avaliable-content'>
            <p>
              <span className='avaliable-title'>Available</span>
              <span className='avaliable-amount'>
                { item.availableAmount } { currency }
              </span>
            </p>
            <p>
              <span className='avaliable-title'>Order limit</span> 
              <span className='avaliable-amount'>
                {item.quoteMinAmountPerOrder}-{item.quoteMaxAmountPerOrder} {fait}
              </span>
            </p>
          </div>
        },
      },
      {
        title: 'Unit price',
        render(item: any) {
          return <div className='unit-price g-buy'>{item.price} {fait} </div>
        },
      },
      {
        title: 'Payment methods',
        render(item: any) {
          return <div className='pay-methods'>
            {
              item.paymentMethods?.map((el: string) => {
                return <span className='pay-item' key={el}>
                  <span className='pay-color' style={{ backgroundColor: payMethodColor[el] }}></span>
                  <div className="pay-name">{el}</div>
                </span>
              })
            }
          </div>
        },
      },
      {
        title: 'Buy/Sell',
        render() {
          return <div className='action-button buy'>
            Buy {currency}
          </div>
        },
      },
    ]
  }, [])

  useEffect(() => {
    requestInstance.get('/api/p2p/buy').then((res: any) => {
      const { code, data } = res
      if (code === 0) {
        console.log(data)
        setTableData(data.buy ? data.buy : [])
      }
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

        <OKTable data={tableData} column={column} />
      </div>
    </div>
  )
}
