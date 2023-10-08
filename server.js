const express = require('express');
const path = require('path');
const commonsrc = require('./backend/router/common');
const { connectDB } = require('./backend/Models/db'); 
const { i18n } = require('./i18n');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'build')));
app.use(i18n.init);
app.use((req, res, next) => {
  const lang = req.headers.lang || 'en'; // Default to 'en' if 'lang' header is not present
  req.setLocale(lang); // Set the locale based on the 'lang' header
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