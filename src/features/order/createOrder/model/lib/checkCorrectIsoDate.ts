export const checkCorrectIsoDate = (dateValue: string) => {
  const [day, month, year] = dateValue.split('/').map(Number);
  const date = new Date(year, month - 1, day);

  return (
    date.getFullYear() === year &&
    date.getMonth() === month - 1 &&
    date.getDate() === day
  );
};
