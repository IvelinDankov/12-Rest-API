import express from "express";
import cors from "cors";
import routes from "./routes.js";
import mongoose from "mongoose";
import { auth } from "./middlewares/authMiddleware.js";

const app = express();

mongoose
  .connect("mongodb://localhost:27017", { dbName: "furnitures" })
  .then(() => console.log("Successfully connected to DB..."))
  .catch((err) => console.log("Cannot connect to DB---"));

// app.use((req, res, next) => {
//   res.setHeader("Access-Control-Allow-Origin", "*");
//   next();
// });
app.use(cors());
app.use(auth);
app.use(express.json());
app.use(routes);

app.listen(3030, () => console.log(`Server is listening on port 3030...`));
