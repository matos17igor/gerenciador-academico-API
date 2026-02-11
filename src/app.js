const express = require("express");
const app = express();
const db = require("./config/database");
const PORT = 3000;
const userRoutes = require("./routes/userRoutes");

app.use(express.json());

app.use("/users", userRoutes);

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
