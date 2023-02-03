const Router = require("express");
const router = Router();

const {
  getAllAvailableProducts,
  createProductWithImage,
} = require("../controllers/products.controller");

/**
 * @openapi
 * /api/v1/products/:
 *   get:
 *     summary: Get all available products
 *     tags:
 *       - Products
 *     responses:
 *       200:
 *         description: Ok
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schema/getAvailablesProducts'
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
 * /api/v1/products/{userId}:
 *   post:
 *     summary: Create product into aplication
 *     parameters:
 *       - in: path
 *         name: userId
 *     tags:
 *       - Products
 *     requestBody:
 *       description: Create product
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schema/createProduct'
 *     responses:
 *       201:
 *         description: Product created
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: product created
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

router.get("/", getAllAvailableProducts);

router.post("/:id", createProductWithImage);

module.exports = router;
