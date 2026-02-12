const express = require("express");
const router = express.Router();
const { verifyToken } = require("../middlewares/authMiddleware");
const taskController = require("../controllers/taskController");

router.use(verifyToken);

router.get("/", (req, res) => {
  return res.json({
    message: "Acesso autorizado!",
    usuarioLogado: req.userId,
  });
});

router.post("/", taskController.create);

module.exports = router;
