export type Shop = {
  _id: string;
  name: string;
  email: string;
  password: string;
  role: string;
  creation_date: string;
  location: ShopLocation;
  description: string;
  logo: string;
  banner: string;
  avrg_score: number;
  work_hours: string[];
  stats: ShopStats;
};

type ShopStats = {
  overall: {
    $numberDecimal: string;
  };
  last_month: {
    $numberDecimal: string;
  };
};

type ShopLocation = {
  address: string;
  geo: Geo;
};

type Geo = {
  coordinates: number[];
};
