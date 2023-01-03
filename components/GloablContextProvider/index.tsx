import React, { useCallback, useEffect, useState } from 'react'
import { BG_WIDTH, MID_WIDTH, SM_WIDTH, BG, SM, MID } from 'common/constant'

type GloablContextProps = {
  children: any
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

const Provider = GloablContext.Provider

const GloablContextProvider: React.FC<GloablContextProps> = ({ children }) => {
  const [lang, setLang] = useState('en')
  const [responseSize, setResponseSize] = useState('sm')

  // 检测屏幕宽度
  const detectSize = useCallback(() => {
    const width = window.screen.width
    if (width <= SM_WIDTH) {
      setResponseSize(SM)
    } else if (width >= MID_WIDTH && width <= BG_WIDTH) {
      setResponseSize(MID)
    } else {
      setResponseSize(BG)
    }
  }, [])

  useEffect(() => {
    detectSize()

    window.addEventListener('resize', detectSize, false)
    return () => {
      window.removeEventListener('resize', detectSize, false)
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

export default GloablContextProvider
