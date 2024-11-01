import ShopCard from './ui/ShopCard/ShopCard';

import type { Shop, ShopParams } from './model/types/Shop';

import shopSlice from './api/slices/shopSlice';
import { setShop, clearShop } from './api/slices/shopSlice';

export { ShopCard };
export { Shop, ShopParams };
export { shopSlice };
export { setShop, clearShop };
