import { Schema, Types, model } from "mongoose";

const furnitureSchema = new Schema({
  make: {
    type: String,
    required: true,
    minLength: [4, "Make should be 4 characher logn"],
  },
  model: {
    type: String,
    required: true,
    minLength: [4, "Model should be 4 characher logn"],
  },
  year: {
    type: Number,
    required: true,
    min: [1970, "Min year is 1970"],
    max: [2050, "Min year is 2050"],
  },
  description: {
    type: String,
    required: true,
    minLength: [10, "Description must be at least 10 words"],
  },
  price: {
    type: Number,
    required: true,
    min: [0, "Price must be positive number"],
  },
  img: {
    type: String,
    required: true,
  },
  material: {
    type: String,
  },
  _ownerId: {
    type: Types.ObjectId,
    ref: "User",
  },
});

const Furniture = model("Furniture", furnitureSchema);

export default Furniture;
