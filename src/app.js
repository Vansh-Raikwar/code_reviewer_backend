const express = require("express");
const app = express();
app.use(express.json()); 
const cors = require("cors");
const rateLimit = require("express-rate-limit");

const limiter = rateLimit({
    windowMs: 60*60*1000, // 60 minutes
    max:15,
    message:"Too Many Request from This IP, Pleases try after some time"
})

app.use(cors({
  origin: "https://code-reviewer-frontend-zeta.vercel.app", // or your frontend domain
  credentials: true
}));


module.exports = app;
