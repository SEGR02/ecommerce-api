const { Op } = require("sequelize");
const models = require("../models");

class ProductServices {
  static async getAllAvailableProducts() {
    try {
      const result = models.products.findAll({
        where: {
          available_qty: { [Op.gt]: 0 },
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
      const result = models.products.create(product);
      return result;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = ProductServices;
