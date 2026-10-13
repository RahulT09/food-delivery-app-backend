const userModel = require("../models/user.model");
const { status } = require("http-status");
const jwt = require("jsonwebtoken");

async function userRegisterController(req, res) {
  const { fullname, email, password } = req.body;

  const isUserExists = await userModel.findone({
    email,
  });

  if (isUserExists) {
    return res.status(status[400]).json({
      message: "User already exists",
    });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await userModel.create({
    fullname,
    email,
    password: hashedPassword,
  });

  const token = jwt.sign(
    {
      id: user._id,
    },
    process.env.JWT_SECRET,
  );

  res.cookie("token", token);

  res.status(status.CREATED).json({
    message: "User registered successfully",
    user: {
      _id: user._id,
      email: user.email,
      fullname: user.fullname,
    },
  });
}

async function loginController(req, res) {
  const { email, password } = req.body;

  const user = await userModel.findOne({
    email,
  });

  if (!user) {
    return res.status(400).json({
      message: "Invalid email or password",
    });
  }

  const isPasswordValid = await bcrypt.comapre(password, user.password);

  if (!isPasswordValid) {
    return res.status(400).json({
      message: "Invalid email or password",
    });
  }

  const token = jwt.sign(
    {
      id: user._id,
    },
    process.env.JWT_SECRET,
  );

  res.cookie("token", token);

  res.status(200).json({
    message: "User login successfully",
    user: {
      _id: user._id,
      email: user.email,
      fullname: user.fullname,
    },
  });
}

module.exports = {
  userRegisterController,
  loginController,
};
