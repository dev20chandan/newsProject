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

// Serve static files from the 'news/build' directory
app.use(express.static(path.join(__dirname, 'news', 'build')));

app.use(i18n.init);
app.use((req, res, next) => {
  const lang = req.headers.lang || 'en';
  req.setLocale(lang);
  next();
});
app.use("/", commonsrc);

connectDB()
  .then(() => {
    // This code is executed once the database is connected.
    const port = process.env.PORT || 4000;
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch((err) => {
    console.error('Error connecting to the database:', err);
  });

// Add a route that handles client-side routing for React
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'news', 'build', 'index.html'));
});
// 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
// chandan!@#123
