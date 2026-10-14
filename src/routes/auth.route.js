const express = require("express");
const authController  = require("../controllers/auth.controller");

const router = express.Router();


//user auth api's
router.post("/register", authController.userRegisterController);
router.post("/login",authController.loginController);
router.get("/logout",authController.logOut);



module.exports = router;
