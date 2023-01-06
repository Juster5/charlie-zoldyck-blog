import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

//  服务端i18n实例
export default function initI18n (lang) {
  // 加载对应的语言包, 因为json包放在本地, 如果是放在cdn则需要通过http请求
  const resource = require(`../public/locales/${lang}/translation.json`)
  i18n
  .use(initReactI18next)
  .init({
    debug: false,
    lng: lang,
    fallbackLng: lang,
    interpolation: {
      escapeValue: false,
    },
    resources: {
      [lang]: {
        translation: resource        
      }
    }
  })
}