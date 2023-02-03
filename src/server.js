require("dotenv").config();
const app = require("./app");
const PORT = process.env.PORT || 8000;
const swaggerDocs = require("../swagger");

app.listen(PORT, () => {
  console.log(`Servidor o servidora corriendo en el puerto ${PORT}`);
  swaggerDocs(app, PORT);
});
