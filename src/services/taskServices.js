const taskRepository = require("../repositories/taskRepository");

async function registerTask(title, description, deadline, userId, subjectId) {
  const deadlineData = new Date(deadline);
  const now = new Date();

  if (deadlineData < now) {
    throw new Error("A data de entrega nao pode ser no passado!");
  }

  const taskId = await taskRepository.create({
    title,
    description,
    deadline,
    userId,
    subjectId,
  });

  return { taskId };
}

module.exports = { registerTask };
