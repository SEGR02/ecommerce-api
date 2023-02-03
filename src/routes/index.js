const authRoutes = require("./auth.router");
const productsRoutes = require("./products.routes");
const carRoutes = require("./car.routes");
const ordersRoutes = require("./orders.routes");
const error = require("../middlewares/error.middleware");

const routerApi = (app) => {
  app.use("/api/v1/auth", authRoutes, error);
  app.use("/api/v1/products", productsRoutes, error);
  app.use("/api/v1/car", carRoutes, error);
  app.use("/api/v1/orders", ordersRoutes, error);
};

module.exports = routerApi;
