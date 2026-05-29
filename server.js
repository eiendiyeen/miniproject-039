const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('App berjalan');
});

app.get('/waktu', (req, res) => {
  res.json({
    serverTime: new Date()
  });
});

app.listen(port, () => {
  console.log(`Server berjalan di port ${port}`);
});
