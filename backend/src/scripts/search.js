const mongoose = require('mongoose');
const Auction = require('../models/Auctions'); // adjust if needed

async function searchAuctions(keyword) {
  try {
    await mongoose.connect('mongodb://127.0.0.1:27017/phase1');

    const regex = new RegExp(keyword, 'i'); // case-insensitive search
    const results = await Auction.find({
      $or: [
        { title: regex },
        { description: regex }
      ]
    });

    if (results.length === 0) {
      console.log('❌ No matching auctions found.');
    } else {
      console.log('🔍 Matching Auctions:');
      results.forEach((item, i) => {
        console.log(`${i + 1}. ${item.title} - ${item.description}`);
      });
    }

  } catch (err) {
    console.error('Error during search:', err);
  } finally {
    await mongoose.connection.close();
  }
}

const keyword = process.argv[2] || ''; // grabs search term from command line
searchAuctions(keyword);
