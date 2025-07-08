const { json } = require("express");
const generate = require("../services/ai.service.js");


module.exports.getResult = async (req, res) => {
  try {
    const { prompt } = req.body;
    const result = await generate(prompt);
    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};
