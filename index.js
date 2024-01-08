const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
require("dotenv").config();
const userRoutes = require("./Routes/user.routes.js");

// middleware
app.use(express.json());
app.use(cors());
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// connect database
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log("listening on port ", process.env.PORT);
    });
  })
  .catch((err) => {
    console.log(err);
  });

//api routes
app.use("/api/user", userRoutes);
