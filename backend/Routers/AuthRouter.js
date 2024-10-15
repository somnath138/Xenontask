const { signup, login } = require("../Controllers/AuthController");
const {
  signupValidation,
  loginvalidation,
} = require("../Middlewares/AuthValidation");

const router = require("express").Router();

router.post("/login", loginvalidation, login);
router.post("/signup", signupValidation, signup);

module.exports = router;
