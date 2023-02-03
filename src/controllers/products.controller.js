const ProductServices = require("../services/products.services");

const getAllAvailableProducts = async (req, res, next) => {
  try {
    const result = await ProductServices.getAllAvailableProducts();
    if (result) {
      res.json(result);
    } else res.status(400).json({ message: "Something wrong" });
  } catch (error) {
    next(error);
  }
};

const createProductWithImage = async (req, res, next) => {
  try {
    const { id } = req.params;
    const product = req.body;
    product.user_id = id;
    const { available_qty } = product;
    available_qty > 0
      ? (product.is_available = true)
      : (product.is_available = false);
    const result = await ProductServices.create(product);
    if (result) {
      res.status(201).json({ message: "product created" });
    } else res.status(400).json({ message: "Something wrong" });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllAvailableProducts,
  createProductWithImage,
};
