const swaggerJSDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
require("dotenv").config();

const options = {
  apis: [
    "./src/routes/auth.router.js",
    "./src/models/users.js",
    "./src/routes/products.routes.js",
    "./src/models/products.js",
    "./src/routes/car.routes.js",
    "./src/models/car.js",
    "./src/routes/orders.routes.js",
    "./src/models/order.js",
  ],
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Ecommerce API",
      version: "0.0.9",
      description: "API for ecommerce aplication",
    },
  },
};

//vamos a generar una especificacion en json para nuestra documentacion

const swaggerSpec = swaggerJSDoc(options);

const swaggerDocs = (app, port) => {
  //generar la ruta de donde se mostrara la documentacion
  app.use("/api/v1/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
  app.get("/api/v1/docs.json", (req, res) => {
    res.setHeader({ "Content-Type": "aplication/json" });
    res.send(swaggerSpec);
  });
};

module.exports = swaggerDocs;
