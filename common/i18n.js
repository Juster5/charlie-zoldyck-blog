import i18n from 'i18next';
import Backend from "i18next-http-backend";
import { initReactI18next } from 'react-i18next';

// todo: 默认英语, 应该改为根据浏览器请求的语言动态设置
const resource = require('../public/locales/en/translation.json')

let instance = null

// 浏览器端
if (typeof window !== 'undefined') {
  instance = i18n
  .use(initReactI18next)
  .use(Backend)
  .init({
    debug: false,
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
    // resources: {
    //   en: {
    //     translation: resource        
    //   }
    // }    
  });
} else { // 服务端
  instance = i18n
  .use(initReactI18next)
  .init({
    debug: false,
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: {
        translation: resource        
      }
    }
  })
}

export default instance;