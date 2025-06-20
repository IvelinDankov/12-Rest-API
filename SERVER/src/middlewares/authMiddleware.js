import jwt from "jsonwebtoken";
const SECRET = "XCVXVXVV13FDFS";

export const auth = (req, res, next) => {
  const token = req.header("X-Authorization");
  if (!token) {
    return next();
  }

  try {
    const decodedToken = jwt.verify(token, SECRET);

    req.user = decodedToken;

    return next();
  } catch (err) {}
};
