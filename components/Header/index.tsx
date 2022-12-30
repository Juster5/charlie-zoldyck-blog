import type { NextPage } from 'next';
import Image from 'next/image';
import './index.scss'
import CollpaseMenu from '../CollapseMenu';

import { navs } from './constant';

const Header: NextPage = () => {
  return (
    <header className="okx-header">
      {/* logo区域 */}
      <div className="logo-wrapper">
        <Image src="/images/logo.png" alt="OKX" width={82} height={36} />
      </div>

      {/* 导航栏区域 */}
      <div className="navs">
        {
          navs.map(el=>{
            return (
              <CollpaseMenu menu={el.children} key={el.title}>
                <div className="nav-item sm-screen-hidden">{el.title}</div>              
              </CollpaseMenu>
            )
          })
        }
      </div>

      {/* 登录区域 */}
      <div className="login-wrapper">
        <span className="login sm-screen-hidden">Log in</span>
        <span className="signup">Sign up</span>
        <span className="menu bg-screen-hidden"></span>
      </div>

      {/* 多语言区域 */}
      <CollpaseMenu position="right" 
        menu={[{
          title: '简体中文'
        }, {
          title: 'English'
        }]}
      >
        <div className="languages sm-screen-hidden" >
          <span className='okx-header-footer-language'></span>     
        </div>
      </CollpaseMenu>
    </header>    
  )
}

export default Header