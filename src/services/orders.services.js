const models = require("../models");

class OrderServices {
  static async getOrdersById(id) {
    try {
      const result = await models.order.findAll({
        where: { user_id: id },
      });
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async createOrderById(id) {
    try {
      const result = await models.order.create(id);
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async getTotalPrice(id) {
    try {
      const result = await models.car.findOne({
        where: { id },
      });
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async getProductInCarById(id) {
    try {
      const result = await models.product_in_car.findAll({
        where: { car_id: id },
      });
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async addProductToOrder(field) {
    try {
      const result = models.product_in_order.create(field);
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async getProductIdById(id) {
    try {
      const result = await models.products.findOne({ where: { id } });
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async cleanCar(id) {
    try {
      const result = await models.product_in_car.destroy({
        where: { car_id: id },
      });
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async cleanTotalPrice(id) {
    try {
      const result = await models.car.update(
        { total_price: 0 },
        { where: { user_id: id } }
      );
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async orderPaid(id) {
    try {
      const result = await models.order.update(
        { is_paid: true },
        { where: { id } }
      );
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async findEmail(id) {
    try {
      const aux = await models.order.findOne({
        where: { id },
        attributes: ["user_id"],
      });
      const result = await models.users.findOne({
        where: aux,
        attributes: ["email"],
      });
      return result;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = OrderServices;
