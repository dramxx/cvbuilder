const mongoose = require("mongoose");

const cvSchema = new mongoose.Schema({
  testText: {
    type: String,
    required: true,
    min: 3,
    max: 255,
  },
});

module.exports = mongoose.model("Cv", cvSchema);
