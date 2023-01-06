import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// 测试时, 默认为英语语言包
const resource = require('../public/locales/en/translation.json')

i18n.use(initReactI18next)
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
  });

