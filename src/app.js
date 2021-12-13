const express = require('express');
const app = express();
const db = require('./config/database')
app.use(express.json());
app.use(require('./routes/index'));
app.use(require('./routes/procesos'));

module.exports = app;

