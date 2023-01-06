import i18n from 'i18next';
import Backend from "i18next-http-backend";
import { initReactI18next } from 'react-i18next';
import { EN } from './constant';
// @ts-ignore
import Cookies from 'js-cookie'


// 浏览器端i18n, 需要动态加载语言包
if (typeof window !== 'undefined') {
  const lang = Cookies.get('locale') || EN
  i18n
  .use(initReactI18next)
  .use(Backend)
  .init({
    debug: false,
    lng: 'en-US',
    fallbackLng: lang,
    interpolation: {
      escapeValue: false,
    },
  });
}