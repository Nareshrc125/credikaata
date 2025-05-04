const Customer = require('../models/customerModel');

exports.createCustomer = async (req, res) => {
  try {
    const { name, phone, trustScore } = req.body;
    const newCustomer = new Customer({ name, phone, trustScore, userId: req.userId });
    await newCustomer.save();
    res.status(201).json(newCustomer);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
