const taskServices = require("../services/taskServices");

async function create(req, res) {
  try {
    const { title, description, deadline, subjectId } = req.body;
    const userId = req.userId;

    const register = await taskServices.registerTask(
      title,
      description,
      deadline,
      userId,
      subjectId
    );

    return res.status(201).json(register);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
}

async function list(req, res) {
  try {
    const userId = req.userId;
    const tasks = await taskServices.listTasks(userId);

    return res.status(200).json(tasks);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
}

async function update(req, res) {
  try {
    const taskId = req.params.id;
    const userId = req.userId;
    const taskData = req.body;

    const tasks = await taskServices.updateTask(taskId, userId, taskData);

    return res.status(200).json(tasks);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
}

async function remove(req, res) {
  try {
    const taskId = req.params.id;
    const userId = req.userId;

    const tasks = await taskServices.deleteTask(taskId, userId);

    return res.status(200).json(tasks);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
}

module.exports = { create, list, update, remove };
