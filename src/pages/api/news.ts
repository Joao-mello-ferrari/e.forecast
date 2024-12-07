// This is a Next.js API route handler that fetches news articles from Google News
// using the SerpApi service. It takes a search query (q) and country code (gl) 
// as parameters and returns news search results.
import axios from 'axios';

export default async function handler(req, res) {
  try {
    // Extract search query and country code from request parameters
    const { q, gl } = req.query;
    const apiKey = process.env.NEXT_PUBLIC_SERP_API_KEY;

    // Make API request to SerpApi's Google News endpoint
    const response = await axios.get("https://serpapi.com/search.json", {
      params: {
        q,          // Search query
        gl,         // Country code (e.g. US, GB, etc)
        api_key: apiKey,
        engine: "google_news"
      },
    });

    // Return successful response with news data
    res.status(200).json(response.data);
  } catch (error) {
    // Log and return error if request fails
    console.error("Error fetching news:", error.message);
    res.status(error.response?.status || 500).json({ error: "Failed to fetch news." });
  }
}