const Sequelize = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  return car.init(sequelize, DataTypes);
};

/**
 * @openapi
 * components:
 *   schema:
 *     getCarById:
 *       type: array
 *       items:
 *         type: object
 *         properties:
 *           quantity:
 *             type: int
 *             example: 3
 *           product:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: Jabon
 *               price:
 *                 type: number
 *                 format: float
 *                 example: 5.50
 *               image:
 *                 type: string
 *                 example: urlimage.com
 *     addProduct:
 *       type: object
 *       properties:
 *         product_id:
 *           type: int
 *           example: 3
 *         quantity:
 *           type: int
 *           example: 2
 *         price:
 *           type: number
 *           format: float
 *           example: 15.25
 */

class car extends Sequelize.Model {
  static init(sequelize, DataTypes) {
    return super.init(
      {
        id: {
          autoIncrement: true,
          autoIncrementIdentity: true,
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true,
        },
        user_id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          references: {
            model: "users",
            key: "id",
          },
        },
        total_price: {
          type: DataTypes.DOUBLE,
          allowNull: true,
          defaultValue: 0,
        },
      },
      {
        sequelize,
        tableName: "car",
        schema: "public",
        timestamps: false,
        indexes: [
          {
            name: "car_pkey",
            unique: true,
            fields: [{ name: "id" }],
          },
        ],
      }
    );
  }
}
