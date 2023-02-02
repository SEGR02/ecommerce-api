const Router = require("express");
const router = Router();

const {
  addProductToCar,
  getProductsOfSpecifiedCar,
} = require("../controllers/car.controllers");

router.get("/:id", getProductsOfSpecifiedCar);

router.post("/:id", addProductToCar);

module.exports = router;
