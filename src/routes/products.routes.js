const Router = require("express");
const router = Router();

const {
  getAllAvailableProducts,
  createProduct,
} = require("../controllers/products.controller");

router.get("/", getAllAvailableProducts);

router.post("/", createProduct);

module.exports = router;
