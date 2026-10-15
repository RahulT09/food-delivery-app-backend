const express = require("express");
const foodController = require("../controllers/food.controller");
const authMiddleware = require("../middleware/auth.middleware");
const multer = require("multer");
const router = express.Router();

const upload = multer({
  storage: multer.memoryStorage(),
});

//to list food items
//http://localhost:3000/api/food/list -+o
router.post(
  "/list",
  authMiddleware.foodPartnerAuthMiddleware,
  upload.single("video"),
  foodController.listFoodItem,
);

module.exports = router;
