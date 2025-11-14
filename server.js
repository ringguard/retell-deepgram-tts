const express = require("express");
const axios = require("axios");

const app = express();
app.use(express.json());

const DEEPGRAM_API_KEY = process.env.DEEPGRAM_API_KEY;
const MODEL = "aura-2-callista-en";

app.post("/tts", async (req, res) => {
  try {
    const text = req.body.text || req.body.input || "";
    if (!text) return res.status(400).send("No text provided");

    const dgRes = await axios({
      method: "post",
      url: `https://api.deepgram.com/v1/speak?model=${MODEL}&encoding=linear16&sample_rate=8000`,
      headers: {
        Authorization: `Token ${DEEPGRAM_API_KEY}`,
        "Content-Type": "application/json"
      },
      data: { text },
      responseType: "arraybuffer"
    });

    res.setHeader("Content-Type", "audio/wav");
    res.send(dgRes.data);
  } catch (err) {
    console.error("TTS error:", err.response?.data || err.message);
    res.status(500).send("TTS error");
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Deepgram TTS bridge listening on port ${PORT}`);
});
