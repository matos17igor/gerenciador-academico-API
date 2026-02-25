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

async function listTasks(userId) {
  return await taskRepository.findAll(userId);
}

async function updateTask(id, userId, taskData) {
  const { title, description, deadline } = taskData;

  const updateData = new Date(deadline);
  const now = new Date();

  if (updateData < now) {
    throw new Error("A data de entrega nao pode ser no passado!");
  }

  const result = await taskRepository.update({
    title,
    description,
    deadline,
    id,
    userId,
  });

  if (result.affectedRows === 0) {
    throw new Error(
      "Tarefa nao encontrada ou voce nao tem permissao para edita-la"
    );
  }

  return { message: "Tarefa atualizada com sucesso!" };
}

module.exports = { registerTask, listTasks, updateTask };
