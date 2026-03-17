const { registerTask, updateTask } = require("./taskServices");

const taskRepository = require("../repositories/taskRepository");

jest.mock("../repositories/taskRepository");

describe("Testes do createTask", () => {
  test("Deve barrar a criacao e lancar erro se a data for no passado", async () => {
    const titulo = "Estudar testes";
    const descricao = "Testando o service";
    const dataPassada = "2000-01-01";
    const userId = 1;
    const subjectId = 1;

    await expect(
      registerTask(titulo, descricao, dataPassada, userId, subjectId)
    ).rejects.toThrow("A data de entrega nao pode ser no passado!");
  });

  test("Deve criar uma tarefa com sucesso sem tocar no banco de dados", async () => {
    taskRepository.create.mockResolvedValue(99);

    const titulo = "Estudar Mocks nos testes";
    const descricao = "Isolando o banco de dados dos testes";
    const dataFutura = "2030-12-31";
    const userId = 1;
    const subjectId = 1;

    const resultado = await registerTask(
      titulo,
      descricao,
      dataFutura,
      userId,
      subjectId
    );

    expect(resultado).toEqual({ taskId: 99 });

    expect(taskRepository.create).toHaveBeenCalledTimes(1);

    expect(taskRepository.create).toHaveBeenCalledWith({
      title: titulo,
      description: descricao,
      deadline: dataFutura,
      userId: userId,
      subjectId: subjectId,
    });
  });
});

describe("Testes do updateTask", () => {
  test("Deve barrar o update da task se a data for no passado", async () => {
    const taskId = 1;
    const userId = 1;
    const taskData = {
      title: "Atualizar task",
      description: "Testar updateTask",
      deadline: "2000-01-01",
    };

    await expect(updateTask(taskId, userId, taskData)).rejects.toThrow(
      "A data de entrega nao pode ser no passado!"
    );
  });

  test("Deve barrar o update da tarefa se a tarefa for de outra pessoa", async () => {
    taskRepository.update.mockResolvedValue({ affectedRows: 0 });

    const taskId = 1;
    const userId = 1;
    const taskData = {
      title: "Atualizar tarefa",
      description: "Atualizar tarefa de outra pessoa",
      deadline: "2030-12-31",
    };

    await expect(updateTask(taskId, userId, taskData)).rejects.toThrow(
      "Tarefa nao encontrada ou voce nao tem permissao para edita-la"
    );
  });

  test("Deve atualizar a tarefa com sucesso", async () => {
    taskRepository.update.mockResolvedValue({ affectedRows: 1 });

    const taskId = 1;
    const userId = 1;
    const taskData = {
      title: "Atualizar tarefa",
      description: "Atualizar tarefa corretamente",
      deadline: "2030-12-31",
    };

    const resultado = await updateTask(taskId, userId, taskData);
    expect(resultado).toEqual({
      message: "Tarefa atualizada com sucesso!",
    });
  });
});
