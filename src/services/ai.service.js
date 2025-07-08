const {GoogleGenAI} = require("@google/genai");
const dotenv = require("dotenv");

dotenv.config();

const ai = new GoogleGenAI({apiKey:process.env.API_KEY});

async function main(prompt) {
  const response = await ai.models.generateContent({
    model: `${process.env.MODEL}`,
    contents: `${prompt}`,
    systemInstruction:`${process.env.ROLE}`
  });
  return response.text;
}

async function generate(prompt){
  const result = await main(prompt);
  return result;
}

module.exports=generate;