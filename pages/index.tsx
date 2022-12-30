import '@/pages/index.scss'
import { useEffect } from 'react'

export default function Home() {

  useEffect(()=>{
    document.querySelector('video.first-img')?.play()
  }, [])

  return (
    <div className="home-page-container">
      <div className="first-section">
        <video className="first-img" title="Faster, better, stronger than your average crypto exchange" autoPlay loop width="280" height="580" poster="https://static.okx.com/cdn/assets/imgs/2210/8B245F5F74788F8A.png?x-oss-process=image/format,webp" src="https://static.okx.com/cdn/assets/files/2211/7A3CB59773E00032.mp4"></video>
      </div>
    </div>
  )
}
