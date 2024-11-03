export type Product = {
  _id: string;
  title: string;
  description: string;
  price: {
    $numberDecimal: string;
  };
  image: string;
  category_id: string;
  user_id: string;
};


