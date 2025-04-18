const express = require("express");
const router = express.Router();
const { signup, login } = require("../controllers/authController");

router.post("/", signup);
router.post("/", login);

module.exports = router;
