const express = require("express");
const router = express.Router();
const { verifyToken } = require("../middlewares/authMiddleware");
const taskController = require("../controllers/taskController");

router.use(verifyToken);

router.post("/", taskController.create);
router.get("/", taskController.list);

module.exports = router;
