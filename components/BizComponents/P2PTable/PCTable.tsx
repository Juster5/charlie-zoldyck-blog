import OKTable from '@/components/OKTable'
import React, { useMemo } from 'react'
import Image from 'next/image'
import { useTranslation } from 'react-i18next'
import PaymentMethods from './PayMethods'
import { P2PTablePropsType } from '.'

const PCTable: React.FC<P2PTablePropsType> = ({
  tableData,
  currency,
  fait,
  side
}) => {
  const { t } = useTranslation()

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
                    <span className="nickname-icon">
                      <Image
                        width={16}
                        height={16}
                        src="https://static.okx.com/cdn/assets/imgs/225/23D4D3F3419206E1.png"
                        alt="nickname-icon"
                      />
                    </span>
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
          return (
            <div className="avaliable-content">
              <p>
                <span className="avaliable-title">Available</span>
                <span className="avaliable-amount">
                  {item.availableAmount} {currency}
                </span>
              </p>
              <p>
                <span className="avaliable-title">Order limit</span>
                <span className="avaliable-amount">
                  {item.quoteMinAmountPerOrder}-{item.quoteMaxAmountPerOrder}{' '}
                  {fait}
                </span>
              </p>
            </div>
          )
        },
      },
      {
        title: 'Unit price',
        render(item: any) {
          return (
            <div className={`unit-price ${side === 'buy' ? 'g-buy' : 'g-sell'}`}>
              {item.price} {fait}{' '}
            </div>
          )
        },
      },
      {
        title: 'Payment methods',
        render(item: any) {
          return (
            <div className="pay-methods">
              <PaymentMethods methods={item.paymentMethods} />
            </div>
          )
        },
      },
      {
        title: 'Buy/Sell',
        render() {
          return <div className={`action-button ${side === 'buy' ? 'buy' : 'sell'}`}>Buy {currency}</div>
        },
      },
    ]
  }, [currency, fait, side])

  return <OKTable data={tableData} column={column} />
}

export default PCTable
