const userService = require("../services/userService");

async function create(req, res) {
  try {
    const { name, email, password } = req.body;
    const user = await userService.registerUser(name, email, password);

    return res.status(201).json(user);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
}

module.exports = { create };
