const mongoose = require('mongoose');
const Auction = require('../models/Auctions.js'); // Adjust path if needed

async function deleteData() {
  try {
    await mongoose.connect('mongodb://127.0.0.1:27017/phase1');

    const result = await Auction.deleteMany();
    console.log(`🗑️ Deleted ${result.deletedCount} auction(s).`);
  } catch (error) {
    console.error('❌ Error deleting auctions:', error);
  } finally {
    await mongoose.connection.close();
  }
}

deleteData();
