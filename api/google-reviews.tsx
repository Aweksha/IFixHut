// api/google-reviews.js
const fetch = require("node-fetch");

module.exports = async (req, res) => {
  const API_KEY = process.env.GOOGLE_API_KEY; // Store your API key in environment variables
  const PLACE_ID = "YOUR_PLACE_ID"; // Replace with your Google Place ID

  try {
    const response = await fetch(
      `https://maps.googleapis.com/maps/api/place/details/json?place_id=${PLACE_ID}&fields=reviews&key=${API_KEY}`
    );

    if (!response.ok) {
      return res.status(response.status).json({ error: "Failed to fetch reviews" });
    }

    const data = await response.json();
    res.status(200).json(data.result.reviews);
  } catch (error) {
    console.error("Error fetching Google Reviews:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
