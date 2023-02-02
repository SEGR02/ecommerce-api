const Router = require("express");
const router = Router();

const {
  getAllAvailableProducts,
  createProductWithImage,
} = require("../controllers/products.controller");

router.get("/", getAllAvailableProducts);

router.post("/:id", createProductWithImage);

module.exports = router;
