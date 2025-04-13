const { GoogleGenerativeAI } = require('@google/generative-ai');
require('dotenv').config();

const apiKey = process.env.GEMINI_API_KEY;

if (!apiKey) {
    console.error('❌ GEMINI_API_KEY not found in environment!');
    process.exit(1);
}

const genAI = new GoogleGenerativeAI(apiKey);

// NEW handler
async function handleGeminiRequest(req, res) {
    try {
        const { status, action } = req.body;

        if (!status || !action) {
            return res.status(400).json({ error: 'Missing "status" or "action" in request body' });
        }

        const prompt = `
You are a dungeon master in a text-based fantasy game.

Here is the player's current status:
${JSON.stringify(status, null, 2)}

Here is their action:
"${action}"

Respond in the following format:

Narrative:
<short story text about what happens next>

Updated Status JSON:
<valid JSON representing the new status>
`;

        const model = genAI.getGenerativeModel({ model: 'models/gemini-2.0-pro-exp-02-05' });

        const result = await model.generateContent(prompt);
        const response = await result.response;
        const text = response.text();

        // Parse narrative and updated JSON
        const narrativeMatch = text.match(/Narrative:\s*([\s\S]*?)\nUpdated Status JSON:/i);
        const statusMatch = text.match(/Updated Status JSON:\s*([\s\S]*)/i);

        if (!narrativeMatch || !statusMatch) {
            return res.status(500).json({ error: 'Could not parse Gemini response', raw: text });
        }

        const narrative = narrativeMatch[1].trim();

        // Remove markdown-style code block formatting if present
        let jsonString = statusMatch[1]
            .replace(/```json/i, '')
            .replace(/```/, '')
            .trim();

        const updatedStatus = JSON.parse(jsonString);

        res.json({ narrative, status: updatedStatus });

    } catch (err) {
        console.error('❌ Gemini API error:', err);
        res.status(500).json({ error: 'Gemini API call failed', details: err.message });
    }
}

module.exports = { handleGeminiRequest };


