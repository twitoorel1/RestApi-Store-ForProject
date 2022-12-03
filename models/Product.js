const { Schema, model } = require("mongoose");

const productSchema = new Schema({
  name: {
    type: String,
    required: true,
    lowercase: true,
  },
  price: {
    type: Number,
    required: true,
    lowercase: true,
  },
  image: {
    type: String,
    required: true,
  },
  category: {
    required: [true, "Please Provide Category"],
    type: Schema.Types.ObjectId,
    ref: "Category",
  },
  createAt: {
    type: Date,
    default: () => Date.now(),
    immutable: true,
  },
});

module.exports = model("Product", productSchema);
