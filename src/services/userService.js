const userRepository = require("../repositories/userRepository");
const bcrypt = require("bcrypt");

async function registerUser(name, email, password) {
  if (!name || !email || !password) {
    throw new Error("Preencha todos os campos!");
  }

  const existingUser = await userRepository.findByEmail(email);
  if (existingUser) {
    throw new Error("Email ja cadastrado");
  }

  // Criptografia da senha
  const saltRounds = 10;
  const hashPassword = await bcrypt.hash(password, saltRounds);

  const userId = await userRepository.create({
    name,
    email,
    password: hashPassword,
  });

  return { id: userId, name, email };
}

module.exports = { registerUser };
