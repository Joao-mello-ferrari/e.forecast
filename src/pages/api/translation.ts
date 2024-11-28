import axios from 'axios';

export default async function handler(req, res) {
  try {
    const { language } = req.query;
    const apiKey = process.env.NEXT_PUBLIC_LECTO_API_KEY;

    const response = await axios.post("https://api.lecto.ai/v1/translate/text", {
      texts: ["previsão do tempo"],
      to: [language],
      from: "pt"
    }, {
      headers: {
        'X-API-Key': apiKey,
        "Content-Type": "application/json",
        "Accept": "application/json"
      }
    });


    res.status(200).json(response.data);
  } catch (error) {
    console.error("Error fetching translation:", error.message);
    res.status(error.response?.status || 500).json({ error: "Failed to fetch translation." });
  }
}