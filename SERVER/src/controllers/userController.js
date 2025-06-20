import { Router } from "express";

const userController = Router();

userController.use("/users/register", (req, res) => {
  const { email, password } = req.body;
});

export default userController;
