const userRepository = require("../repositories/userRepository");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

async function login(email, password) {
  const user = await userRepository.findByEmail(email);

  if (!user) {
    throw new Error("Email ou senha invalidos!");
  }

  const passwordMatch = await bcrypt.compare(password, user.password);

  if (!passwordMatch) {
    throw new Error("Email ou senha invalidos!");
  }

  const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
    expiresIn: "1h",
  });

  return { token };
}

module.exports = { login };
