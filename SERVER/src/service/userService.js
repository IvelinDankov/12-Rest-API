import User from "../model/userModel.js";
import { generateAuthToken } from "../utils/tokenUtil.js";

import bcrypt from "bcrypt";

export default {
  async register(email, password) {
    const user = await User.findOne({ email });
    if (user) {
      throw new Error("User already exist!");
    }

    const createdUser = await User.create({ email, password });

    const token = generateAuthToken(createdUser);

    return {
      _id: createdUser.id,
      email: createdUser.email,
      accessToken: token,
    };
  },

  async login(email, password) {
    const user = await User.findOne({ email });
    if (!user) {
      throw new Error("Invalid email or pass");
    }

    const isValid = await bcrypt.compare(password, user.password);

    if (!isValid) {
      throw new Error("Invalid email or pass");
    }

    const token = generateAuthToken(user);

    return {
      email: user.email,
      id: user._id,
      accessToken: token,
    };
  },
};
