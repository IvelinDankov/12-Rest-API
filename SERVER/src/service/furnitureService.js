import Furniture from "../model/furniture.js";

export default {
  create(data, userId) {
    return Furniture.create({ ...data, _ownerId: userId });
  },
  getAllFurnitures() {
    return Furniture.find();
  },
  getOne(id) {
    return Furniture.findById(id);
  },
  update(id, data) {
    return Furniture.findByIdAndUpdate(id, data);
  },
};
