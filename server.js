const express = require('express');
const path = require('path');
const app = express();
const commonsrc = require('./backend/router/common')

// Serve static files from the 'build' folder
app.use(express.static(path.join(__dirname, 'build')));
app.use("/", commonsrc);


app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
// Start the server on port 3000
const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// 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
