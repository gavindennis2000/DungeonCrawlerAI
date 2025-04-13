require('dotenv').config();
const axios = require('axios');

exports.handleTextToSpeech = async (req, res) => {
    const apiKey = process.env.TEXT_TO_SPEECH_KEY;
    const { text } = req.body;

    if (!text) {
        return res.status(400).json({ error: 'Text is required' });
    }

    try {
        const response = await axios.post(
            `https://texttospeech.googleapis.com/v1/text:synthesize?key=${apiKey}`,
            {
                input: { text },
                voice: {
                    languageCode: 'en-US',
                    name: 'en-US-Wavenet-D',
                },
                audioConfig: {
                    audioEncoding: 'MP3',
                },
            }
        );

        const audioContent = response.data.audioContent;
        res.status(200).json({ audioContent });

    } catch (error) {
        console.error('TTS API error:', error?.response?.data || error.message);
        res.status(500).json({ error: 'TTS API call failed' });
    }
};