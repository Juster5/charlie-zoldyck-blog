import type { NextPage } from 'next';
import Image from 'next/image';

import styles from './index.module.scss';
import { navs } from './constant';

const Header: NextPage = () => {
  return (
    <header className={styles.navs}>
      <div className={styles['logo-wrapper']}>
        <Image src="/images/logo.png" alt="OKX" width={82} height={36} />
      </div>
      {
        navs.map(el=>{
          return <span key={el.title} className={styles['nav-item']}>{el.title}</span>
        })
      }
      
    </header>    
  )
}

export default Header