const Account = require("../models/Account");

exports.getAccounts = async (req, res) => {
  const accounts = await Account.find();
  res.json(accounts);
};

exports.updateStatus = async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;

  const updated = await Account.findByIdAndUpdate(id, { status }, { new: true });

  if (!updated) {
    return res.status(404).json({ message: "Account not found" });
  }

  res.json({ message: "Status updated", account: updated });
};
