import Furniture from "../model/furniture.js";

export default {
  create(data) {
    return Furniture.create(data);
  },
  getAllFurnitures() {
    return Furniture.find();
  },
};
