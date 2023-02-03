const Router = require("express");
const router = Router();

const {
  getOrdersById,
  createOrderById,
  orderPaid,
} = require("../controllers/orders.controllers");

/**
 * @openapi
 * /api/v1/orders/{userId}:
 *   get:
 *     summary: Get orders by id
 *     parameters:
 *       - in: path
 *         name: userId
 *     tags:
 *       - Orders
 *     responses:
 *       200:
 *         description: Ok
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schema/getOrdersById'
 *       400:
 *         description: Something wrong / error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Something wrong / error
 * /api/v1/orders/{UserId}:
 *   post:
 *     summary: Create order
 *     parameters:
 *       - in: path
 *         name: UserId
 *     tags:
 *       - Orders
 *     responses:
 *       200:
 *         description: Order created
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Order created
 *       400:
 *         description: Something wrong
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: something wrong / error
 * /api/v1/orders/paid/{orderId}:
 *   post:
 *     summary: Orden pagada
 *     parameters:
 *       - in: path
 *         name: orderId
 *     tags:
 *       - Orders
 *     responses:
 *       200:
 *         description: Invoice paid successfully check your email
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Invoice paid successfully check your email
 *       400:
 *         description: Something wrong
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: something wrong / error
 */

router.get("/:id", getOrdersById);

router.post("/:id", createOrderById);
router.post("/paid/:id", orderPaid);

module.exports = router;
