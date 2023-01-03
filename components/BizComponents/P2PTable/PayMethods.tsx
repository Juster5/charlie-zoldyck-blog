import React, { useContext, useCallback } from 'react'
import { GloablContext } from '@/components/GloablContextProvider'
import { payMethodColor, SM } from 'common/constant'
import CollpaseMenu from '../../CollapseMenu'

type PropsType = {
  methods: []
}

const PaymentMethods: React.FC<PropsType> = ({ methods }) => {
  const { responseSize } = useContext(GloablContext)

  const renderPayMethod = useCallback(
    (paymentMethods: any[]) => {
      const splitIndex = responseSize === SM ? 2 : 4 // 分割线, 移动端取前两个, pc端取前4个

      const firstArr = paymentMethods.slice(0, splitIndex)
      const nextArr = paymentMethods.slice(splitIndex)

      return (
        <>
          {firstArr?.map((el: string) => {
            return (
              <span className="pay-item" key={el}>
                <span
                  className="pay-color"
                  style={{ backgroundColor: payMethodColor[el] }}
                ></span>
                <div className="pay-name">{el}</div>
              </span>
            )
          })}
          {nextArr?.length > 0 && (
            <CollpaseMenu
              style={{
                verticalAlign: 'middle',
              }}
              menuOffsetLeft={80}
              position="center"
              menusRender={() => {
                return nextArr?.map((el: string) => {
                  return (
                    <span className="pay-item" key={el}>
                      <span
                        className="pay-color"
                        style={{ backgroundColor: payMethodColor[el] }}
                      ></span>
                      <div className="pay-name">{el}</div>
                    </span>
                  )
                })
              }}
            >
              <span className="pay-methods-more okx-header-footer-arrow-chevrons-down"></span>
            </CollpaseMenu>
          )}
        </>
      )
    },
    [responseSize]
  )

  return <>{renderPayMethod(methods)}</>
}

export default PaymentMethods
