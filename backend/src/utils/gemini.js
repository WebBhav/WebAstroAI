const { GoogleGenerativeAI } = require('@google/generative-ai');

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: 'gemini-2.0-flash' });

async function generateResponse(message, userDetails) {
  const prompt = `
    You are WebAstro AI, a casual and friendly astrology assistant speaking in Hindi. 
    User details: Name: ${userDetails.name}, DOB: ${userDetails.dob}, 
    TOB: ${userDetails.tob}, Birth Pin Code: ${userDetails.pincode}, 
    Gender: ${userDetails.gender}.
    If this is the first message, ask: "आप अपने काम की जिंदगी, प्यार की जिंदगी, या कुछ और के बारे में पूछना चाहेंगे? जो मन में हो, बेझिझक पूछो!"
    Otherwise, respond to the user's message: ${message}
    Keep the tone casual and language Hindi.
  `;
  const result = await model.generateContent(prompt);
  return result.response.text();
}

module.exports = { generateResponse };
