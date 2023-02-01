const Sequelize = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  return product_in_car.init(sequelize, DataTypes);
};

class product_in_car extends Sequelize.Model {
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
        car_id: {
          type: DataTypes.INTEGER,
          field: "car_id",
          allowNull: false,
          references: {
            model: "car",
            key: "id",
          },
        },
        product_id: {
          type: DataTypes.INTEGER,
          field: "product_id",
          allowNull: false,
          references: {
            model: "product",
            key: "id",
          },
        },
        quantity: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        price: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        status: {
          type: DataTypes.BOOLEAN,
          allowNull: true,
        },
      },
      {
        sequelize,
        tableName: "product_in_car",
        schema: "public",
        timestamps: false,
        indexes: [
          {
            name: "product_in_car_pkey",
            unique: true,
            fields: [{ name: "id" }],
          },
        ],
      }
    );
  }
}
