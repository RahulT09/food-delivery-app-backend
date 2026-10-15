const foodModel = require("../models/food.model");

async function listFoodItem(req, res) {
  console.log(req.foodPartner);

  res.send("food item listed successfully");
}

module.exports = {
  listFoodItem,
};
