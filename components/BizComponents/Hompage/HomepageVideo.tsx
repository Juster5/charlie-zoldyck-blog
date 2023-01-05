import { EN } from 'common/constant'
import React, { useContext, useMemo } from 'react'
import { GloablContext } from '../../GloablContextProvider'

import './index.scss'

const enVideo = [
  {
    src: 'https://static.okx.com/cdn/assets/files/2210/B961D658AE174818.mp4',
    alt: 'Coach Pep GuardiolaExplains "crazy football formation"',
    poster:
      'https://static.okx.com/cdn/assets/imgs/2211/30151288EAF5AEE6.jpg?x-oss-process=image/format,webp',
    videoText: 'Coach Pep Guardiola',
    videoDesc: 'Explains "crazy football formation"',
  },
  {
    src: 'https://static.okx.com/cdn/assets/files/2210/D583B0A2F58732CD.mp4',
    alt: 'F1 driver Daniel RicciardoAsks if OKX is a race car',
    poster:
      'https://static.okx.com/cdn/assets/imgs/2211/8D4C3E2605F69059.jpg?x-oss-process=image/format,webp',
    videoText: 'F1 driver Daniel Ricciardo',
    videoDesc: 'Asks if OKX is a race car',
  },
  {
    src: 'https://static.okx.com/cdn/assets/files/2210/CCAA7B610D3D33D4.mp4',
    alt: 'Snowboarder Scotty JamesBrings in the whole family',
    poster:
      'https://static.okx.com/cdn/assets/imgs/2211/EF1304B5D4D9DB3E.jpg?x-oss-process=image/format,webp',
    videoText: 'Snowboarder Scotty James',
    videoDesc: 'Brings in the whole family',
  },
]

const cnVideo = [
  {
    src: 'https://static.okx.com/cdn/assets/files/2210/B961D658AE174818.mp4',
    alt: '何塞普·瓜迪奥拉教练讲解“疯狂足球战术”',
    poster:
      'https://static.okx.com/cdn/assets/imgs/2211/30151288EAF5AEE6.jpg?x-oss-process=image/format,webp',
    videoText: '何塞普·瓜迪奥拉教练',
    videoDesc: '讲解“疯狂足球战术”',
  },
  {
    src: 'https://static.okx.com/cdn/assets/files/2210/D583B0A2F58732CD.mp4',
    alt: 'F1赛车手丹尼尔·里卡多OKX是否是赛车',
    poster:
      'https://static.okx.com/cdn/assets/imgs/2211/8D4C3E2605F69059.jpg?x-oss-process=image/format,webp',
    videoText: 'F1赛车手丹尼尔·里卡多',
    videoDesc: 'OKX是否是赛车',
  },
  {
    src: 'https://static.okx.com/cdn/assets/files/2210/CCAA7B610D3D33D4.mp4',
    alt: '单板滑雪运动员斯科特·詹姆斯带全家出席',
    poster:
      'https://static.okx.com/cdn/assets/imgs/2211/EF1304B5D4D9DB3E.jpg?x-oss-process=image/format,webp',
    videoText: '单板滑雪运动员斯科特·詹姆斯',
    videoDesc: '带全家出席',
  },
]

const HomepageVideo: React.FC = () => {
  const { lang } = useContext(GloablContext)

  const videos = useMemo(() => {
    return lang === EN ? enVideo : cnVideo
  }, [lang])

  return (
    <div className="homepage-video">
      {videos.map((el, index) => {
        return (
          <div className="video-item" key={index}>
            <video
              controls
              className="video-content"
              title={el.alt}
              poster={el.poster}
              src={el.src}
            ></video>
            <div className="video-text">
              <p className="video-title">{el.videoText}</p>
              <p className="video-desc">{el.videoDesc}</p>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default React.memo(HomepageVideo)
