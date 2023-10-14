import express from 'express';
import path from 'path';
import { connectDB } from './backend/Models/db.js';
import { i18n } from './i18n.js';
import commonsrc from './backend/router/common.js';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import cors from 'cors';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(express.static(path.join(__dirname, 'news', 'build')));

app.use(i18n.init);
app.use((req, res, next) => {
  const lang = req.headers.lang || 'en';
  req.setLocale(lang);
  next();
});
app.use("/", commonsrc);

connectDB()
  .then(() => {})
  .catch((err) => {
    console.error('Error connecting to the database:', err);
  });

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});


// 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