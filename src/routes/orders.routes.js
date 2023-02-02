const Router = require("express");
const router = Router();

const {
  getOrdersById,
  createOrderById,
  orderPaid,
} = require("../controllers/orders.controllers");

router.get("/:id", getOrdersById);

router.post("/:id", createOrderById);
router.post("/paid/:id", orderPaid);

module.exports = router;
