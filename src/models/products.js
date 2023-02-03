const Sequelize = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  return products.init(sequelize, DataTypes);
};

/**
 * @openapi
 * components:
 *   schema:
 *     getAvailablesProducts:
 *       type: array
 *       items:
 *         type: object
 *         properties:
 *           id:
 *             type: int
 *             example: 1
 *           name:
 *             type: string
 *             example: Jabon
 *           price:
 *             type: number
 *             format: float
 *             example: 5.50
 *           available_qty:
 *             type: int
 *             example: 40
 *           is_available:
 *             type: boolean
 *             example: true
 *           image:
 *             type: string
 *             example: image1url.com
 *           user_id:
 *             type: int
 *             example: 2
 *           username:
 *             type: string
 *             example: sebas02
 *     createProduct:
 *         type: object
 *         properties:
 *           name:
 *             type: string
 *             example: Shampoo
 *           price:
 *             type: number
 *             format: float
 *             example: 15.75
 *           available_qty:
 *             type: int
 *             example: 100
 *           image:
 *             type: string
 *             example: urlimage1.com
 */

class products extends Sequelize.Model {
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
        name: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        price: {
          type: DataTypes.DOUBLE,
          allowNull: false,
        },
        available_qty: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        is_available: {
          type: DataTypes.BOOLEAN,
          allowNull: true,
        },
        image: {
          type: DataTypes.STRING,
          allowNull: false,
          unique: "products_image_key",
        },
        user_id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          references: {
            model: "users",
            key: "id",
          },
        },
      },
      {
        sequelize,
        tableName: "products",
        schema: "public",
        timestamps: false,
        indexes: [
          {
            name: "products_image_key",
            unique: true,
            fields: [{ name: "image" }],
          },
          {
            name: "products_pkey",
            unique: true,
            fields: [{ name: "id" }],
          },
        ],
      }
    );
  }
}
