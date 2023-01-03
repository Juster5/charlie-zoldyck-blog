import React, { useContext } from 'react'
import { GloablContext } from '../../GloablContextProvider'
import { BG } from 'common/constant'

import PCTable from './PCTable'
import MobileTable from './MobileTable'

import './index.scss'

export type P2PTablePropsType = {
  tableData: any[]
  currency: string
  fait: string
}

const P2PTable: React.FC<P2PTablePropsType> = ({
  tableData,
  currency,
  fait,
}) => {
  const { responseSize } = useContext(GloablContext)

  return (
    <div className="p2p-table">
      {responseSize === BG ? (
        <PCTable
          tableData={tableData}
          currency={currency}
          fait={fait}
        ></PCTable>
      ) : (
        <MobileTable
          tableData={tableData}
          currency={currency}
          fait={fait}        
        />
      )}
    </div>
  )
}

export default P2PTable
