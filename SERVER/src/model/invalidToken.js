import { Schema, Types, model } from "mongoose";

const invalidTokenSchema = new Schema({
  token: {
    type: String,
    required: true,
  },
  expiresAt: Date,
});

const invalidToken = model("IvalidToken", invalidTokenSchema);

export default invalidToken;
