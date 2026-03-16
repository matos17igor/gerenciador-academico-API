function isDeadlineValid(deadline) {
  const taskDate = new Date(deadline);
  const now = new Date();

  return taskDate >= now;
}

module.exports = { isDeadlineValid };
