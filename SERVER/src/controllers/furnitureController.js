import { Router } from "express";
import furnitureService from "../service/furnitureService.js";

const furnitureController = Router();

furnitureController.post("/", async (req, res) => {
  const furnitureData = req.body;

  await furnitureService.create(furnitureData);

  res.redirect("/data/catalog");
});
furnitureController.get("/", async (req, res) => {
  const furnitures = await furnitureService.getAllFurnitures();

  res.json(furnitures);
});

export default furnitureController;
