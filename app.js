// app.js
const express = require('express');
const mongoose = require('mongoose');

const app = express();
const port = process.env.PORT || 3000;

mongoose.connect('mongodb://mongo:27017/testdb', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.listen(port, () => {
  console.log(`App running on port ${port}`);
});
