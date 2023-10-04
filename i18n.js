// i18n.js

const i18next = require('i18next');

i18next
  .init({
    resources: {
      en: {
        translation: {
          ...require('./backend/locals/en.json'),
        },
      },
     
      hi: {
        translation: require('./backend/locals/hi.json'),
      },
    },
    fallbackLng: 'en',
  });

module.exports = i18next;
