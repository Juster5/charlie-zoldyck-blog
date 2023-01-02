import React from 'react'

import './index.scss'

// type OKTablePropsType = {
//   column: []
//   data: []
// }

const OKTable: React.FC<any> = () => { 

  return (
    <div className="okx-table">
      <table className='okx-table-container'>
        <thead className='okx-table-thead'>
          <tr className='okx-table-tr'>
            <th className='okx-table-th'>标题1
              <div className="okx-table-bottom-border"></div>
            </th>
            <th className='okx-table-th'>标题2
              <div className="okx-table-bottom-border"></div>            
            </th>
          </tr>
        </thead>
        <tbody className='okx-table-tbody'>
          <tr className='okx-table-tr'>
            <td className='okx-table-td'>内容1
              <div className="okx-table-bottom-border"></div>
            </td>
            <td className='okx-table-td'>内容2
            <div className="okx-table-bottom-border"></div>
            </td>
          </tr>
          <tr className='okx-table-tr'>
            <td className='okx-table-td'>内容1
              <div className="okx-table-bottom-border"></div>
            </td>
            <td className='okx-table-td'>内容2
            <div className="okx-table-bottom-border"></div>
            </td>
          </tr>
          <tr className='okx-table-tr'>
            <td className='okx-table-td'>内容1
              <div className="okx-table-bottom-border"></div>
            </td>
            <td className='okx-table-td'>内容2
            <div className="okx-table-bottom-border"></div>
            </td>
          </tr>
          <tr className='okx-table-tr'>
            <td className='okx-table-td'>内容1
            </td>
            <td className='okx-table-td'>内容2
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}


export default OKTable