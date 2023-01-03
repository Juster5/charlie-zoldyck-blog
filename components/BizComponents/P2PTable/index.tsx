import React, { useContext } from 'react'
import { GloablContext } from '../../GloablContextProvider'
import { BG } from 'common/constant'

import PCTable from './PCTable'
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
    <div className='p2p-table'>
      {responseSize === BG ? (
        <PCTable
          tableData={tableData}
          currency={currency}
          fait={fait}
        ></PCTable>
      ) : (
        <div>小图表</div>
      )}
    </div>
  )
}

export default P2PTable
