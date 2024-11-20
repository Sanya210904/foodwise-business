export const getDiscountPrice = (price: number, discount: number): number => {
  return Number(((price * (100 - discount)) / 100).toFixed(2));
};
