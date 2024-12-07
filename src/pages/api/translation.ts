// This is a Next.js API route handler that translates text using the Lecto AI translation service
// It takes a target language as a parameter and translates "previsão do tempo" from Portuguese
import axios from 'axios';

export default async function handler(req, res) {
  try {
    // Extract target language from request parameters
    const { language } = req.query;
    // Get Lecto API key from environment variables
    const apiKey = process.env.NEXT_PUBLIC_LECTO_API_KEY;

    // Make API request to Lecto AI translation endpoint
    const response = await axios.post("https://api.lecto.ai/v1/translate/text", {
      texts: ["previsão do tempo"], // Text to translate (Portuguese for "weather forecast")
      to: [language],               // Target language code
      from: "pt"                    // Source language (Portuguese)
    }, {
      headers: {
        'X-API-Key': apiKey,
        "Content-Type": "application/json",
        "Accept": "application/json"
      }
    });

    // Return successful response with translation data
    res.status(200).json(response.data);
  } catch (error) {
    // Log and return error if request fails
    console.error("Error fetching translation:", error.message);
    res.status(error.response?.status || 500).json({ error: "Failed to fetch translation." });
  }
}