import jwt from "jsonwebtoken";
const SECRET = "XCVXVXVV13FDFS";

export const generateAuthToken = (user) => {
  const payload = {
    userId: user.id,
    email: user.email,
  };
  const token = jwt.sign(payload, SECRET, { expiresIn: "2h" });

  return token;
};
