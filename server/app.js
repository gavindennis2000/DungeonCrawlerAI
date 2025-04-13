const express = require('express');
const cors = require('cors');
const geminiRoutes = require('./routes/gemini');
const ttsRoutes = require('./routes/ttsRoutes');
const imagesRoutes = require('./routes/imagesRoutes');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/gemini', geminiRoutes);
app.use('/api/image', imagesRoutes);
app.use('/api/tts', ttsRoutes);

module.exports = app;