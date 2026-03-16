const taskRepository = require("../repositories/taskRepository");
const { isDeadlineValid } = require("../utils/dateValidator");

async function registerTask(title, description, deadline, userId, subjectId) {
  if (!isDeadlineValid(deadline)) {
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

  if (deadline && !isDeadlineValid(deadline)) {
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

async function deleteTask(id, userId) {
  const result = await taskRepository.remove(id, userId);

  if (result.affectedRows === 0) {
    throw new Error(
      "Tarefa nao encontrada ou voce nao tem permissao para excluir"
    );
  }

  return { message: "Tarefa deletada com sucesso!" };
}

module.exports = { registerTask, listTasks, updateTask, deleteTask };
