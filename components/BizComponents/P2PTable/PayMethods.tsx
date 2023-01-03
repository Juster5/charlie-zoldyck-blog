import React, { useContext, useCallback } from 'react'
import { GloablContext } from '@/components/GloablContextProvider'
import { BG, payMethodColor } from 'common/constant';
import CollpaseMenu from '../../CollapseMenu';

type PropsType = {
  methods: []
}

const PaymentMethods: React.FC<PropsType> = (
  {
    methods
  }
)=> {
  const { responseSize } = useContext(GloablContext)

  console.log(responseSize === BG);
  
  const renderPayMethod = useCallback((paymentMethods: any[]) => {

    const firstArr = paymentMethods.slice(0, 4) // 先取投四个
    const nextArr = paymentMethods.slice(4) // 再取第4个之后的
    
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
  }, [])  

  return <>
    {
       renderPayMethod(methods)
    }
  </>
}

export default PaymentMethods