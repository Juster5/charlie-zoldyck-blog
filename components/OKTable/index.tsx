import React from 'react'

import './index.scss'

type columnType = {
  dataIndex?: string
  title?: string
  key?: string
  // width?: number
  render?: Function
}

type OKTablePropsType = {
  column: columnType[]
  data: any[]
}

const OKTable: React.FC<OKTablePropsType> = (props) => {
  const { data, column } = props

  return (
    <div className="okx-table">
      <table className="okx-table-container">
        <thead className="okx-table-thead">
          <tr className="okx-table-tr">
            {column?.map((el, index) => {
              return (
                <th className="okx-table-th" key={el.key || index}>
                  {el.title}
                  <div className="okx-table-bottom-border" />
                </th>
              )
            })}
          </tr>
        </thead>
        <tbody className="okx-table-tbody">
          {data?.map((el, index) => {
            return (
              <tr className="okx-table-tr" key={el.key || index}>
                {column.map((item, itemIndex) => {
                  return (
                    <td className="okx-table-td" key={item.key || itemIndex}>
                      {/* 如果有render函数则渲染render函数 */}
                      {typeof item.render === 'function'
                        ? item.render(el)
                        : item.dataIndex && el[item.dataIndex]}
                      <div className="okx-table-bottom-border" />
                    </td>
                  )
                })}
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default OKTable
