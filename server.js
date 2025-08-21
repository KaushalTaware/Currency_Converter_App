// server.js
import express from "express";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

// Enable CORS (so frontend can call this API)
app.use(cors());

// Proxy route: /api/convert?from=USD&to=INR&amount=10
app.get("/api/convert", async (req, res) => {
  const { from, to, amount } = req.query;

  if (!from || !to || !amount) {
    return res.status(400).json({ error: "Missing query parameters" });
  }

  const url = `https://api.exchangerate.host/convert?access_key=${process.env.API_KEY}&from=${from}&to=${to}&amount=${amount}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: "Proxy error", details: err.message });
  }
});

app.listen(PORT, () => {
  console.log(` Proxy running on http://localhost:${PORT}`);
});
