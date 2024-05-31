import { Product } from "./product";

export type Order = {
  _id: string;
  totalPrice: number;
  products: Array<{
    count: number;
    product: Product;
  }>;
  createdAt: string;
  updatedAt: string;
};
