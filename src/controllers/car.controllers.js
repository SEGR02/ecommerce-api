const CarServices = require("../services/car.services");

const addProductToCar = async (req, res) => {
  try {
    const { id } = req.params;
    const product = req.body;
    product.car_id = id;
    const result = await CarServices.addProductToCar(product);
    res.json({ message: "Se ha agregado el producto al carrito" });
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
};

const getProductsOfSpecifiedCar = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await CarServices.getSpecifiCar(id);
    res.json(result);
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
};

module.exports = {
  addProductToCar,
  getProductsOfSpecifiedCar,
};
