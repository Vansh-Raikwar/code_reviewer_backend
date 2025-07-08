const express = require("express");
const router = express.Router();
const aiController = require("../controller/ai.contoller.js");

router.post("/get-review",aiController.getResult);

module.exports = router;