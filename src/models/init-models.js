const DataTypes = require("sequelize").DataTypes;
const _car = require("./car");
const _order = require("./order");
const _product_in_car = require("./product_in_car");
const _product_in_order = require("./product_in_order");
const _products = require("./products");
const _users = require("./users");

function initModels(sequelize) {
  const car = _car(sequelize, DataTypes);
  const order = _order(sequelize, DataTypes);
  const product_in_car = _product_in_car(sequelize, DataTypes);
  const product_in_order = _product_in_order(sequelize, DataTypes);
  const products = _products(sequelize, DataTypes);
  const users = _users(sequelize, DataTypes);

  product_in_car.belongsTo(car, { as: "car", foreignKey: "car_id"});
  car.hasMany(product_in_car, { as: "product_in_cars", foreignKey: "car_id"});
  product_in_order.belongsTo(order, { as: "order", foreignKey: "order_id"});
  order.hasMany(product_in_order, { as: "product_in_orders", foreignKey: "order_id"});
  product_in_car.belongsTo(products, { as: "product", foreignKey: "product_id"});
  products.hasMany(product_in_car, { as: "product_in_cars", foreignKey: "product_id"});
  product_in_order.belongsTo(products, { as: "product", foreignKey: "product_id"});
  products.hasMany(product_in_order, { as: "product_in_orders", foreignKey: "product_id"});
  car.belongsTo(users, { as: "user", foreignKey: "user_id"});
  users.hasMany(car, { as: "cars", foreignKey: "user_id"});
  order.belongsTo(users, { as: "user", foreignKey: "user_id"});
  users.hasMany(order, { as: "orders", foreignKey: "user_id"});
  products.belongsTo(users, { as: "user", foreignKey: "user_id"});
  users.hasMany(products, { as: "products", foreignKey: "user_id"});

  return {
    car,
    order,
    product_in_car,
    product_in_order,
    products,
    users,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
