import type { NextPage } from 'next';
import Image from 'next/image';

import styles from './index.module.scss';
import { navs } from './constant';

const Header: NextPage = () => {
  return (
    <header className={styles.header}>
      {/* logo区域 */}
      <div className={styles['logo-wrapper']}>
        <Image src="/images/logo.png" alt="OKX" width={82} height={36} />
      </div>

      {/* 导航栏区域 */}
      <div className={styles.navs}>
        {
          navs.map(el=>{
            return <span key={el.title} className={styles['nav-item'] + ' sm-screen-hidden'}>{el.title}</span>
          })
        }
      </div>

      {/* 登录区域 */}
      <div className={styles['login-wrapper']}>
        <span className={styles.login + ' sm-screen-hidden'}>Log in</span>
        <span className={styles.signup}>Sign up</span>
        <span className={styles.menu + ' bg-screen-hidden'}></span>
      </div>

      {/* 多语言区域 */}
      <div className={styles.languages + ' sm-screen-hidden'}>
      </div>

    </header>    
  )
}

export default Header