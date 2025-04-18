const User = require("../models/User");
const jwt = require("jsonwebtoken");

const generateToken = (user) =>
  jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "1d" });

exports.signup = async (req, res) => {
  const { username, password } = req.body;
  const userExists = await User.findOne({ username });

  if (userExists) {
    return res.status(400).json({ message: "User already exists" });
  }

  const user = await User.create({ username, password });

  if (user) {
    const token = generateToken(user);
    return res.status(201).json({ message: "Signup successful", token });
  }

  res.status(400).json({ message: "Invalid user data" });
};

exports.login = async (req, res) => {
  const { username, password } = req.body;

  const user = await User.findOne({ username });
  if (user && await user.matchPassword(password)) {
    const token = generateToken(user);
    return res.json({ message: "Login successful", token });
  }

  res.status(401).json({ message: "Invalid credentials" });
};