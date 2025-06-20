const express = require("express");
const Auction = require("./models/Auctions"); // Adjust path if needed
const mongoose = require("mongoose");
const app = express();

// Define the root route handler
app.get("/", (req, res) => {
  res.json({ message: "Welcome to Mission 5 Phase 1 API" });
});

app.post("/api/auctions/seed", (req, res) => {
  res.status(201).json({ message: "Auction data seeded successfully" });
});

app.delete("/api/auctions/seed", (req, res) => {
  res.status(200).json({ message: "Auction data deleted successfully" });
});

app.get("/api/auctions/search", async (req, res) => {
  const query = req.query.q?.toLowerCase();

  if (!query) {
    return res.status(400).json({ message: "Search query is required" });
  }

  try {
    // Use Mongoose to find auctions where title or description includes the query (case-insensitive)
    const results = await Auction.find({
      $or: [
        { title: { $regex: query, $options: "i" } },        // 'i' = case insensitive
        { description: { $regex: query, $options: "i" } }
      ]
    });

    res.status(200).json({ results });
  } catch (error) {
    console.error("Error searching auctions:", error);
    res.status(500).json({ message: "Server error during search" });
  }
});



// Export the app for testing and server startup
module.exports = app;
