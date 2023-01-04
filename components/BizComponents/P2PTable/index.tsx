import React, { useCallback, useContext } from 'react'
import { SM } from 'common/constant'
import Image from 'next/image'

import PCTable from './PCTable'
import MobileTable from './MobileTable'
import { GloablContext } from '../../GloablContextProvider'

import './index.scss'

export type P2PTablePropsType = {
  tableData: any[]
  currency: string
  fait: string
  side: string
}

const P2PTable: React.FC<P2PTablePropsType> = ({
  tableData,
  currency,
  fait,
  side,
}) => {
  const { responseSize } = useContext(GloablContext)

  const renderTable = useCallback(() => {

    return responseSize !== SM ? (
      <PCTable
        tableData={tableData}
        currency={currency}
        fait={fait}
        side={side}
      ></PCTable>
    ) : (
      <MobileTable
        tableData={tableData}
        currency={currency}
        fait={fait}
        side={side}
      />
    )
  }, [responseSize])

  return (
    <div className="p2p-table">
      {tableData.length === 0 ? (
        <div className="empty-wrapper">
          <Image width={40} height={40} alt="table-empty" src="https://static.okx.com/cdn/assets/imgs/204/8363375D610E1179.png" />                    
        </div>

      ) : (
        renderTable()
      )}
    </div>
  )
}

export default P2PTable
