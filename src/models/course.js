const mongoose = require("mongoose");

// schema
const courseSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: true,
  },
  price: String,
  subtitle: String,
  releaseYear: Number,
});

module.exports = mongoose.model("Course", courseSchema);
