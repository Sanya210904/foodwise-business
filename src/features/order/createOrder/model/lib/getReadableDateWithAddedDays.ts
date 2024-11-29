export const getReadableDateWithAddedDays = (daysToAdd: number) => {
  const now = new Date();

  const resultDate = new Date(now);
  resultDate.setDate(now.getDate() + daysToAdd);

  return resultDate.toLocaleDateString('en-GB', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  });
};
