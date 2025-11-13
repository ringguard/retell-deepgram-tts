{\rtf1\ansi\ansicpg1252\cocoartf2639
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx566\tx1133\tx1700\tx2267\tx2834\tx3401\tx3968\tx4535\tx5102\tx5669\tx6236\tx6803\pardirnatural\partightenfactor0

\f0\fs24 \cf0 const express = require("express");\
const axios = require("axios");\
\
const app = express();\
app.use(express.json());\
\
const DEEPGRAM_API_KEY = process.env.DEEPGRAM_API_KEY;\
const MODEL = "aura-2-callista-en"; // female, semi-pro, neutral\
\
app.post("/tts", async (req, res) => \{\
  try \{\
    // Retell custom TTS usually sends the text in req.body.text or similar.\
    // If your Retell config uses a different field, change it here.\
    const text = req.body.text || req.body.input || "";\
\
    if (!text) \{\
      return res.status(400).send("No text provided");\
    \}\
\
    const dgRes = await axios(\{\
      method: "post",\
      url: `https://api.deepgram.com/v1/speak?model=$\{MODEL\}&encoding=linear16&sample_rate=8000`,\
      headers: \{\
        Authorization: `Token $\{DEEPGRAM_API_KEY\}`,\
        "Content-Type": "application/json"\
      \},\
      data: \{ text \},\
      responseType: "arraybuffer"\
    \});\
\
    // Return 8kHz WAV audio for telephony\
    res.setHeader("Content-Type", "audio/wav");\
    res.send(dgRes.data);\
  \} catch (err) \{\
    console.error("TTS error:", err.response?.data || err.message);\
    res.status(500).send("TTS error");\
  \}\
\});\
\
const PORT = process.env.PORT || 3000;\
app.listen(PORT, () => \{\
  console.log(`Deepgram TTS bridge listening on port $\{PORT\}`);\
\});\
}