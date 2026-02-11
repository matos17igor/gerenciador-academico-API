const db = require("../config/database");

async function create(user) {
  const sql = `
        INSERT INTO users(name, email, password)
        VALUES(?, ?, ?)
    `;

  const [result] = await db.execute(sql, [
    user.name,
    user.email,
    user.password,
  ]);

  return result.insertId;
}

async function findByEmail(email) {
  const sql = `
        SELECT * FROM users
        WHERE email = ?
    `;

  const [rows] = await db.execute(sql, [email]);

  return rows[0];
}

module.exports = { create, findByEmail };
