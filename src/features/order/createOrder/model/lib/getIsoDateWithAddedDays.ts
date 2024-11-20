export const getIsoDateWithAddedDays = (daysToAdd: number) => {
  const now = new Date();

  const resultDate = new Date(now);
  resultDate.setDate(now.getDate() + daysToAdd);

  resultDate.setHours(23, 59, 59, 0);

  return resultDate.toISOString();
};
