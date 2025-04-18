const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

const authRoutes = require("./routes/authRoutes.js");
const accountRoutes = require("./routes/accounts.js");

dotenv.config();
connectDB();

const app = express();
app.use(express.json());

app.use("/signup", authRoutes);
app.use("/login", authRoutes);
app.use("/accounts", accountRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
