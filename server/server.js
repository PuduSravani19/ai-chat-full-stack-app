
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { GoogleGenAI } from "@google/genai";
dotenv.config();
const ai = new GoogleGenAI({
    apiKey:process.env.GEMINI_API_KEY
});
console.log("API KEY:", process.env.GEMINI_API_KEY);


const app = express();

app.use(cors());
app.use(express.json());
app.post("/api/chat", async (req, res) => {
  try {
    const message = req.body.message;

    if (!message) {
      return res.status(400).json({ error: "Message required" });
    }

    console.log("🔥 USING GEMINI:", message);

    const result = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: message
    });

    const text =
      result?.candidates?.[0]?.content?.parts?.[0]?.text;

    res.json({
      reply: text || "No response from AI"
    });

  } catch (error) {
    console.error("Gemini full error:", error);
    if(error?.status === 429 ){
        return res.status(429).json({
            reply:"Too many requests . please wait a moment."
        });
    }

    res.status(500).json({
      reply: "AI failed"
    });
  }
});
app.listen(5000,()=>{
    console.log("server running on the port 5000");
})


