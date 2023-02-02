const models = require("../models");

class CarServices {
  static async addProductToCar(product) {
    try {
      const products = await models.products.findOne({
        where: product.product_id,
      });
      const updateProduct = await models.products.update(
        {
          available_qty: products.available_qty - product.quantity,
          is_available: products.available_qty - product.quantity > 0,
        },
        {
          where: { id: product.product_id },
        }
      );
      const result = await models.product_in_car.create(product);
      const totalPrice = result.price * result.quantity;
      const { car_id } = await result;
      const id = car_id;
      const updateCar = await models.car.update(
        {
          user_id: car_id,
          total_price: totalPrice,
        },
        {
          where: { id },
        }
      );
      return result;
    } catch (error) {
      throw error;
    }
  }
  static async getSpecifiCar(id) {
    try {
      const result = models.product_in_car.findAll({
        where: { car_id: id },
        attributes: ["quantity"],
        include: {
          model: models.products,
          as: "product",
          attributes: ["name", "price", "image"],
        },
      });
      return result;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = CarServices;
