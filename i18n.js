// i18n.js
const i18n = require('i18n');
const path = require('path'); // Import the path module

// Configure i18n
i18n.configure({
  locales: ['en', 'hi'],
  defaultLocale: 'en',
  cookie: 'lang',
  directory: path.join(__dirname, 'locales')
});

// Define a function to translate text
function translate(key) {
  return i18n.__(key);
}

module.exports = {
  i18n,
  translate,
};
