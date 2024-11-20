export const getIsoDateFromLocaleString = (dateString: string) => {
  const [day, month, year] = dateString.split('/').map(Number);

  const date = new Date(year, month - 1, day);
  date.setHours(23, 59, 0, 0);

  return date.toISOString();
};
