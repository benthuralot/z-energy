const mongoose = require("mongoose");
const Auction = require("../models/Auctions.js"); // Adjust the path as necessary
const auctions = require("../data/seedData.js");

// MongoDB connection function
async function seedDatabase() {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/phase1");

    await Auction.deleteMany(); // clear old data
    await Auction.insertMany(auctions);

    console.log("🎉 Auction data seeded successfully!");
  } catch (error) {
    console.error("❌ Error seeding data:", error);
  } finally {
    await mongoose.connection.close();
  }
}

seedDatabase();
