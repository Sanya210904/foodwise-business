export const getLocaleDateStringFromIso = (dateValue: string) => {
  return new Date(dateValue).toLocaleDateString('en-GB');
};
