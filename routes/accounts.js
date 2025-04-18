const express = require("express");
const router = express.Router();
const protect = require("../middleware/authMiddleware");
const { getAccounts, updateStatus } = require("../controllers/accountController");

router.get("/", protect, getAccounts);
router.post("/:id/status", protect, updateStatus);

module.exports = router;
