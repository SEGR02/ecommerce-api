const Sequelize = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  return product.init(sequelize, DataTypes);
};

class product extends Sequelize.Model {
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
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        available_qty: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        is_available: {
          type: DataTypes.BOOLEAN,
          allowNull: true,
          defaultValue: false,
        },
        user_id: {
          type: DataTypes.INTEGER,
          field: "user_id",
          allowNull: false,
          references: {
            model: "users",
            key: "id",
          },
        },
      },
      {
        sequelize,
        tableName: "product",
        schema: "public",
        timestamps: false,
        indexes: [
          {
            name: "product_pkey",
            unique: true,
            fields: [{ name: "id" }],
          },
        ],
      }
    );
  }
}
