import React, { useCallback, useEffect, useState } from 'react'
import { getResponseSize } from 'common/util'
// @ts-ignore
import Cookies from 'js-cookie'
import { checkLang } from 'common/util'
import { SM } from 'common/constant'

type GloablContextProps = {
  children: any
  defaultLang?: string // 服务端渲染才有的数据
  defaultSize?: string // 服务端渲染才有的数据
}

type GloablContextType = {
  lang: string
  setLang: Function
  responseSize: string
  setResponseSize: Function
}

export const GloablContext = React.createContext<GloablContextType>(
  {} as GloablContextType
)

const locale = checkLang(Cookies.get('locale'))
const Provider = GloablContext.Provider

const GloablContextProvider: React.FC<GloablContextProps> = ({
  children,
  defaultLang,
  defaultSize,
}) => {
  // 语言和屏幕宽度都是默认先去服务端传进来的参数, 用来做服务端渲染, 客户端则取cookie中的数据
  const [lang, setLang] = useState(defaultLang || locale)
  const [responseSize, setResponseSize] = useState(defaultSize || SM)

  // 观测屏幕宽度变化, 并设置
  const dective = useCallback(() => {
    setResponseSize(getResponseSize())
  }, [])

  useEffect(() => {
    dective()

    window.addEventListener('resize', dective, false)
    return () => {
      window.removeEventListener('resize', dective, false)
    }
  }, [])

  return (
    <Provider
      value={{
        lang,
        setLang,
        responseSize,
        setResponseSize,
      }}
    >
      {children}
    </Provider>
  )
}

export default React.memo(GloablContextProvider)
