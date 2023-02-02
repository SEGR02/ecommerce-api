const ProductServices = require("../services/products.services");

const getAllAvailableProducts = async (req, res) => {
  try {
    const result = await ProductServices.getAllAvailableProducts();
    res.json(result);
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
};

const createProductWithImage = async (req, res) => {
  try {
    const { id } = req.params;
    const product = req.body;
    product.user_id = id;
    const { available_qty } = product;
    available_qty > 0
      ? (product.is_available = true)
      : (product.is_available = false);
    const result = await ProductServices.create(product);
    res.status(201).json({ message: "product created" });
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
};

module.exports = {
  getAllAvailableProducts,
  createProductWithImage,
};
