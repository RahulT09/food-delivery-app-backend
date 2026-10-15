const foodPartnerModel = require("../models/foodpartner.model");
const jwt = require("jsonwebtoken");

async function foodPartnerAuthMiddleware(req, res, next) {
  const token = req.cookies.token;

  if (!token) {
    return res.status(401).json({
      message: "Please Log-In first",
    });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const foodPartner = await foodPartnerModel.findById(decoded.id);

    if (!foodPartner) {
      return res.status(401).json({
        message: "Food partner not found",
      });
    }

    req.foodPartner = foodPartner;
    next();
  } catch (error) {
    return res.status(401).json({
      message: "Unauthorized access",
    });
  }
}

module.exports = {
  foodPartnerAuthMiddleware,
};
