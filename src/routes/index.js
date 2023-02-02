const authRoutes = require("./auth.router");
const productsRoutes = require("./products.routes");
const carRoutes = require("./car.routes");
const ordersRoutes = require("./orders.routes");

const routerApi = (app) => {
  app.use("/api/v1/auth", authRoutes);
  app.use("/api/v1/products", productsRoutes);
  app.use("/api/v1/car", carRoutes);
  app.use("/api/v1/orders", ordersRoutes);
};

module.exports = routerApi;
