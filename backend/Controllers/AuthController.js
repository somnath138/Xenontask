const bcrypt = require("bcrypt");
const UserModel = require("../Models/User");
const jwt = require("jsonwebtoken");
const signup = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const user = await UserModel.findOne({ email });

    if (user) {
      console.log(user + "****");
      return res.status(409).json({
        message: "user is already exist , you can login",
        success: false,
      });
    }
    const userModel = new UserModel({ name, email, password });
    userModel.password = await bcrypt.hash(password, 10); //created 10 letter hash
    await userModel.save();
    res.status(201).json({
      message: "signup successfully",
      success: true,
    });
  } catch (err) {
    res.status(500).json({
      message: err,
      success: false,
    });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await UserModel.findOne({ email });
    const errorMsg = {
      err1: "Auth failed password is wrong",
      err2: "Email is Not Registered!",
    };
    if (!user) {
      return res.status(403).json({
        message: errorMsg.err2,
        success: false,
      });
    }

    const isPassEqual = await bcrypt.compare(password, user.password);
    
    if (!isPassEqual) {
      return res.status(403).json({
        message: errorMsg.err1,
        success: false,
      });
    }

    const jwtToken = jwt.sign(
      { email: user.email, _id: user._id },
      process.env.JWT_SECRET,
      { expiresIn: "24h" }
    );

    res.status(200).json({
      message: "login successfully",
      success: true,
      jwtToken,
      email,
      name: user.name,
    });
  } catch (err) {
    res.status(500).json({
      message: "internal server errr",
      success: false,
    });
  }
};

module.exports = {
  signup,
  login,
};
