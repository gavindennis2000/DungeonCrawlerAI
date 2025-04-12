const { GoogleGenerativeAI } = require('@google/generative-ai');
require('dotenv').config();

const genAI = new GoogleGenerativeAI({apiKey: process.env.GEMINI_API_KEY});

async function handleGeminiRequest(req, res){
    try{
        const {prompt} = req.body;

        const model = genAI.getGenerativeModel({model: 'gemini-pro'});
        const result = await model.generateContent(prompt);
        const response = await result.response;
        const text = response.text();

        res.json({text});
    } catch(err){
        console.log(err);
        res.status(500).json({error: 'Something went wrong with Gemini API'})
    }
}

module.exports = { handleGeminiRequest };