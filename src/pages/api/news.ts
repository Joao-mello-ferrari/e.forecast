import axios from 'axios';

export default async function handler(req, res) {
  try {
    const { q, gl } = req.query;
    const apiKey = process.env.NEXT_PUBLIC_SERP_API_KEY;

    const response = await axios.get("https://serpapi.com/search.json", {
      params: {
        q,
        gl,
        api_key: apiKey,
        engine: "google_news"
      },
    });

    res.status(200).json(response.data);
  } catch (error) {
    console.error("Error fetching news:", error.message);
    res.status(error.response?.status || 500).json({ error: "Failed to fetch news." });
  }
}