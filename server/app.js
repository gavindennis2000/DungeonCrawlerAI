const express = require('express');
const cors = require('cors');
const geminiRoutes = require('./routes/gemini');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/gemini', geminiRoutes);

module.exports = app;