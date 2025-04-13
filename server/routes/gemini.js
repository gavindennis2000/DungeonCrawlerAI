const express = require('express');
const router = express.Router();
const { handleGeminiRequest } = require('../controllers/geminiController');

router.post('/generate', handleGeminiRequest);

module.exports = router;