const Router = require("express");
const router = Router();

const {
  addProductToCar,
  getProductsOfSpecifiedCar,
} = require("../controllers/car.controllers");

/**
 * @openapi
 * /api/v1/car/{carId}:
 *   get:
 *     summary: Get car by id
 *     parameters:
 *       - in: path
 *         name: carId
 *     tags:
 *       - Car
 *     responses:
 *       200:
 *         description: Ok
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schema/getCarById'
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
 * /api/v1/car/{CarId}:
 *   post:
 *     summary: Add product into car
 *     parameters:
 *       - in: path
 *         name: CarId
 *     tags:
 *       - Car
 *     requestBody:
 *       description: Add product into car
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schema/addProduct'
 *     responses:
 *       200:
 *         description: The product has been added to the cart
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: The product has been added to the cart
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

router.get("/:id", getProductsOfSpecifiedCar);

router.post("/:id", addProductToCar);

module.exports = router;
