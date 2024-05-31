import express from 'express';
import path from 'path';
import { connectDB } from './backend/Models/db.js';
import { i18n } from './i18n.js';
import commonsrc from './backend/router/common.js';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import cors from 'cors';
import morgan from 'morgan';
import 'dotenv/config'


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
app.use(morgan("dev"))

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
