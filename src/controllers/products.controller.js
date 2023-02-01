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

const createProduct = async (req, res) => {
  try {
    const product = req.body;
    const result = await ProductServices.create(product);
    res.status(201).json({ message: "product created" });
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
};

module.exports = {
  getAllAvailableProducts,
  createProduct,
};
