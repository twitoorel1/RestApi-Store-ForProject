const { Schema, model } = require("mongoose");

const categorySchema = new Schema({
  name: {
    type: String,
    unique: true,
    required: true,
    lowercase: true,
  },
  image: {
    type: String,
    required: true,
  },
  createAt: {
    type: Date,
    default: () => Date.now(),
    immutable: true,
  },
});

module.exports = model("Category", categorySchema);
