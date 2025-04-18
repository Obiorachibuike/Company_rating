const mongoose = require("mongoose");

const accountSchema = new mongoose.Schema({
  companyName: String,
  matchScore: Number,
  status: {
    type: String,
    enum: ["Target", "Not Target"],
    default: "Not Target"
  }
});

module.exports = mongoose.model("Account", accountSchema);
