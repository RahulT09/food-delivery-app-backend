const express = require("express");
const cookieParser = require("cookie-parser");
const authRouter = require("../src/routes/auth.route");
const foodPartnerRouter = require("../src/routes/foodPartner.route")

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());


app.use("/api/user", authRouter);
app.use("/api/food-partner", foodPartnerRouter)


module.exports = app;
