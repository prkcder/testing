const express = require('express');
const app = express();

// app.use(express('public'));

app.get('/', (req, res) => res.send('Hello World of Tests'));

module.exports = app;
