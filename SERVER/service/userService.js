import User from "../models/userModel.js";

export default {
  register(email, password) {
    const user = User.findOne({ email });
    if (user) {
      throw new Error("User already exist!");
    }

    return User.create({ email, password });
  },
};
