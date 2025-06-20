import { Router } from "express";
import furnitureService from "../service/furnitureService.js";

const furnitureController = Router();

furnitureController.get("/", async (req, res) => {
  const furnitures = await furnitureService.getAllFurnitures();

  res.json(furnitures);
});
furnitureController.post("/", async (req, res) => {
  const furnitureData = req.body;

  const ownerId = req.user.id;

  await furnitureService.create(furnitureData, ownerId);

  res.redirect("/data/catalog");
});
furnitureController.get("/:furnitureId", async (req, res) => {
  const furniturId = req.params.furnitureId;
  const furniture = await furnitureService.getOne(furniturId);

  res.json(furniture);
});

furnitureController.put("/:furnitureId", async (req, res) => {
  const furniturId = req.params.furnitureId;
  const furnitureData = req.body;

  await furnitureService.update(furniturId, furnitureData);
  res.json({});
});

export default furnitureController;
