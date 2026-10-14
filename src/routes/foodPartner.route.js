const express = require("express");
const foodPartner = require("../controllers/foodPartener.controller");

const router = express.Router();

//food-partner Auth api's

router.post("/register", foodPartner.registerFoodPartner);
router.post("/login", foodPartner.loginFoodPartner);
router.get("/logout", foodPartner.logoutFoodPartner);


module.exports = router