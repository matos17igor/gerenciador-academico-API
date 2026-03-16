const { isDeadlineValid } = require("./dateValidator");

test("Deve retornar TRUE quando a data for no futuro", () => {
  const dataFutura = "2030-12-31";

  const resultado = isDeadlineValid(dataFutura);

  expect(resultado).toBe(true);
});

test("Deve retornar FALSE quando a data for no passado", () => {
  const dataPassada = "2000-01-01";

  const resultado = isDeadlineValid(dataPassada);

  expect(resultado).toBe(false);
});

test("Deve retornar FALSE quando a data for um texto", () => {
  const dataErrada = "nao-e-uma-data";

  const resultado = isDeadlineValid(dataErrada);

  expect(resultado).toBe(false);
});

test("Deve retornar FALSE quando nao for enviada nenhuma data", () => {
  const dataVazia = "";

  const resultado = isDeadlineValid(dataVazia);

  expect(resultado).toBe(false);
});
