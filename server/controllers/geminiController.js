const { GoogleGenerativeAI } = require('@google/generative-ai');

require('dotenv').config(); // Load environment variables

// Validate API key
const apiKey = process.env.GEMINI_API_KEY;

if (!apiKey) {
    console.error('❌ GEMINI_API_KEY not found in environment!');
    process.exit(1);
}

// Initialize Gemini client
const genAI = new GoogleGenerativeAI(apiKey);

/**
 * Handles a POST request to generate content using Gemini 1.5 Flash
 * Expects: { "prompt": "your prompt here" } in JSON body
 */
async function handleGeminiRequest(req, res) {
    try {
        const { prompt } = req.body;

        if (!prompt || typeof prompt !== 'string') {
            return res.status(400).json({ error: 'Missing or invalid "prompt" in request body' });
        }

        const model = genAI.getGenerativeModel({ model: 'models/gemini-1.5-flash' });

        const result = await model.generateContent(prompt);
        const response = await result.response;
        const text = response.text();

        res.json({ text });
    } catch (err) {
        console.error('❌ Gemini API error:', err);
        res.status(500).json({ error: 'Gemini API call failed' });
    }
}

module.exports = { handleGeminiRequest };
