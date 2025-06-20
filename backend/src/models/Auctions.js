const mongoose = require("mongoose");

const auctionSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    start_price: {
      type: Number,
      required: true,
    },
    reserve_price: {
      type: Number,
    },
  },
  { timestamps: true }
);

const Auction = mongoose.model("Auction", auctionSchema);

module.exports = Auction;
