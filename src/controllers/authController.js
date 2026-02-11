const authService = require("../services/authService");

async function login(req, res) {
  const { email, password } = req.body;

  try {
    const result = await authService.login(email, password);
    return res.status(200).json({ result });
  } catch (error) {
    return res.status(401).json({ error: error.message });
  }
}

module.exports = { login };
