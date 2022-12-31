import '@/pages/index.scss'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import Image from 'next/image'


const sectionFourItems = [
  {
    title: 'okx_web_home_global_modes_btn_lite',
    subTitle: 'okx_web_home_global_modes_text_lite',
    img: 'https://static.okx.com/cdn/assets/imgs/2212/1F468D0080B73C28.png',
  },
  {
    title: 'okx_web_home_global_modes_btn_web3',
    subTitle: 'okx_web_home_global_modes_text_web3',
    img: 'https://static.okx.com/cdn/assets/imgs/2212/57F89DAF3464757B.png',
  },
  {
    title: 'okx_web_home_global_modes_btn_pro',
    subTitle: 'okx_web_home_global_modes_text_pro',
    img: 'https://static.okx.com/cdn/assets/imgs/2212/510A1B1163A3AD7B.png',
  },
]

export default function Home() {
  const { t } = useTranslation()

  const [activeIndex, setActiveIndex] = useState(0)
  const [activeImg, setActiveImg] = useState(sectionFourItems[0].img)

  useEffect(() => {
    const fn = () => {
      const videos = document.querySelectorAll('.home-page-video')
      for (let i = 0; i < videos.length; i++) {
        const video = videos[i] as HTMLVideoElement
        video.play()
      }
    }
    window.addEventListener('load', fn)

    return () => {
      window.removeEventListener('load', fn)
    }
  }, [])

  return (
    <div className="home-page-container">
      <div className="first-section">
        <video
          className="first-img home-page-video"
          title="Faster, better, stronger than your average crypto exchange"
          autoPlay
          playsInline
          loop
          width="280"
          height="580"
          muted
          poster="https://static.okx.com/cdn/assets/imgs/2210/8B245F5F74788F8A.png?x-oss-process=image/format,webp"
          src="https://static.okx.com/cdn/assets/files/2211/7A3CB59773E00032.mp4"
        ></video>
      </div>

      <div className="second-section">
        <div className="second-title">
          <p className="common-title">
            {t('okx_web_home_global_trader_title_pro_trader')}
          </p>
          <p className="common-desc response-text pc-text">
            {t('okx_web_home_global_trader_text_lowest_fees')}
          </p>
          <p className="common-desc response-text mobile-text">
            {t('okx_web_home_global_trader_text_lowest_fees_mobile')}
          </p>
        </div>
        <div className="second-body">
          <video
            className="img-wrapper home-page-video"
            title="Trade like a proGet the lowest fees, fastest transactions, powerful APIs, and more."
            autoPlay
            playsInline
            webkit-playsinline="true"
            loop
            width="936"
            height="536"
            muted
            poster="https://static.okx.com/cdn/assets/imgs/2210/CD7F77673935D3C7.jpg?x-oss-process=image/format,webp"
            src="https://static.okx.com/cdn/assets/files/2212/882D5049A31E763B.mp4"
          ></video>
        </div>
      </div>

      <section className="third-section">
        <div className="third-container">
          <div className="third-animation">
            {/* <picture className="okui-image-webp"> */}
            {/* <source srcset="https://static.okx.com/cdn/assets/imgs/2212/1F468D0080B73C28.png?x-oss-process=image/format,webp" /> */}
            <Image
              className="third-animation-img"
              src={activeImg}
              alt="One app. Unlimited possibilities.Lite"
              width="288"
              height="624"
            />
            {/* </picture> */}
          </div>
          <div className="third-body">
            <p className="common-title">{t('okx_web_home_global_modes_title_one_app')}</p>
            <div className="tab-container">
              {sectionFourItems.map((el, index) => {
                return (
                  <div
                    key={index}
                    className={`tab-item ${
                      activeIndex === index ? 'active' : ''
                    }`}
                    onClick={() => {
                      setActiveIndex(index)
                      setActiveImg(el.img)
                    }}
                  >
                    {t(el.title)}
                  </div>
                )
              })}
            </div>
            <p className="common-desc">
              {t(sectionFourItems[activeIndex].subTitle)}
            </p>
          </div>
        </div>
      </section>

      <div className="fourth-section">
        <div className="fourth-title">
          <p className="common-title pc-text">{t('okx_web_home_global_evolution_title_with_you')}</p>
          <p className="common-title mobile-text">{t('okx_web_home_global_evolution_title_with_you_mobile')}</p>
          <p className="common-desc response-text pc-text">
            {t('okx_web_home_global_evolution_text_confidence')}
          </p>
          <p className="common-desc response-text mobile-text">
            {t('okx_web_home_global_evolution_text_confidence_mobile')}
          </p>
        </div>
        <div className="fourth-body">
          <video
            className="img-wrapper pc-text home-page-video"
            title="Trade like a proGet the lowest fees, fastest transactions, powerful APIs, and more."
            autoPlay
            playsInline
            loop
            width="936"
            height="536"
            muted
            poster="https://static.okx.com/cdn/assets/imgs/2210/2763D233C494439D.jpg?x-oss-process=image/format,webp"
            src="https://static.okx.com/cdn/assets/files/2210/D47D930F643E7A00.webm"
          />
          <Image
            className="mobile-text"
            alt="With you every step of the wayFrom your first crypto trade to your first NFT purchase, you'll have us to guide you through the process. No stupid questions. No sleepless nights. Have confidence in your crypto."
            width="400"
            height="400"
            src="https://static.okx.com/cdn/assets/imgs/2210/602389EA3A7E31BD.gif"
          />
        </div>
      </div>
    </div>
  )
}
