// import React, { useContext } from 'react'
// import Image from 'next/image'
// import { GloablContext } from '../GloablContextProvider'

// type langType = 'zh' | 'en'
// type sizeType = 'sm' | 'mid' | 'bg'

// type ResponseMediaPropsType = {
//   mideaType: 'video' | 'img'
//   url?: string // 加载资源的链接
//   forLang: langType | langType[] // 什么语言下加载
//   forSize: sizeType | sizeType[] // 什么屏幕下加载
//   src: string
//   alt: string
//   width: string | number
//   height: string | number
//   other: object
// }

// const ResponseMedia: React.FC<ResponseMediaPropsType> = ({
//   mideaType,
//   url,
//   forLang,
//   forSize,
//   src,
//   alt,
//   width,
//   height,
//   other,
// }) => {
//   const { lang, responseSize } = useContext(GloablContext)
//   return (
//     <>
//       {mideaType === 'video' ? (
//         <video />
//       ) : (
//         <span>
//           <Image />
//         </span>
//       )}
//     </>
//   )
// }
// export default React.memo(ResponseMedia)
