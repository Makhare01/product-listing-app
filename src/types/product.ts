import { ListPagination } from "./common";

export type Product = {
  _id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  stock: number;
  category: string;
};

export type ProductResponse = ListPagination & { products: Array<Product> };
