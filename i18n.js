import i18n from 'i18n';
import path from 'path';

// Get the directory name using ES6 module-compatible method
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Configure i18n
i18n.configure({
  locales: ['en', 'hi'],
  defaultLocale: 'en',
  cookie: 'lang',
  directory: path.join(__dirname, 'locales'),
});

// Define a function to translate text
function translate(key) {
  return i18n.__(key);
}

export { i18n, translate };
