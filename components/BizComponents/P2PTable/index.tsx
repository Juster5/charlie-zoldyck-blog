import React, { useContext } from 'react'
import { GloablContext } from '../../GloablContextProvider'
import { SM } from 'common/constant'

import PCTable from './PCTable'
import MobileTable from './MobileTable'

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

  return (
    <div className="p2p-table">
      {responseSize !== SM ? (
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
      )}
    </div>
  )
}

export default P2PTable
