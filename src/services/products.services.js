const models = require("../models");

class ProductServices {
  static async getAllAvailableProducts() {
    try {
      const result = models.product.findAll({
        where: {
          is_available: true,
        },
        include: {
          model: models.users,
          as: "user",
          attributes: ["username"],
        },
      });
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async create(product) {
    try {
      const result = models.product.create(product);
      return result;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = ProductServices;
