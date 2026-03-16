const { isDeadlineValid } = require("./dataValidator");

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
