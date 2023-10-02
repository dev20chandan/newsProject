const express = require('express');
const path = require('path');
const app = express();
const commonsrc = require('./backend/router/common');
const { connectDB } = require('./backend/Models/db'); 

// Serve static files from the 'build' folder
app.use(express.static(path.join(__dirname, 'build')));
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
