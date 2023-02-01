const express = require("express");
const app = express();
const cors = require("cors");
const morgan = require("morgan");
const routerApi = require("./routes");

app.use(express.json());
app.use(cors());
app.use(morgan("tiny"));
// app.use("/api/v1", authRoutes);

routerApi(app);

module.exports = app;
