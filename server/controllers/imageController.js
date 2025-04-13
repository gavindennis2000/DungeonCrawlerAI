require('dotenv').config();
const axios = require('axios');

const  Dall_e_3= process.env.DALL_E_3_KEY;

if (!Dall_e_3) {
    console.error('❌ Dall_e_3 is missing from environment variables');
    process.exit(1);
}

exports.generateImage = async (req, res) => {
    const { prompt } = req.body;

    if (!prompt || typeof prompt !== 'string') {
        return res.status(400).json({ error: 'Invalid or missing prompt' });
    }

    try {
        const response = await axios.post(
            'https://api.openai.com/v1/images/generations',
            {
                model: 'dall-e-3',
                prompt,
                n: 1,
                size: '1024x1024'
            },
            {
                headers: {
                    Authorization: `Bearer ${Dall_e_3}`,
                    'Content-Type': 'application/json'
                }
            }
        );

        const imageUrl = response.data?.data?.[0]?.url;

        if (!imageUrl) {
            return res.status(500).json({ error: 'Image generation failed' });
        }

        res.json({ imageUrl });
    } catch (err) {
        console.error('[🔥] OpenAI API error:', err.response?.data || err.message);
        res.status(500).json({ error: 'OpenAI API error', details: err.message });
    }
};