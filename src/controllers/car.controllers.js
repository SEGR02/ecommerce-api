const CarServices = require("../services/car.services");

const addProductToCar = async (req, res, next) => {
  try {
    const { id } = req.params;
    const product = req.body;
    product.car_id = id;
    const result = await CarServices.addProductToCar(product);
    if (result) res.json({ message: "The product has been added to the cart" });
    else res.status(400).json({ message: "Something wrong" });
  } catch (error) {
    next(error);
  }
};

const getProductsOfSpecifiedCar = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await CarServices.getSpecifiCar(id);
    if (result) res.json(result);
    else res.status(400).json({ message: "something wrong" });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  addProductToCar,
  getProductsOfSpecifiedCar,
};
