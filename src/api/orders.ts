import axios from "axios";
import { base_url } from "./products";
import { Order, Product } from "@/types";

export const getOrders = async () => {
  return await axios.get<Array<Order>>(`${base_url}/orders`);
};

type CreateOrderInput = {
  totalPrice: number;
  products: Array<{
    product: Product;
    count: number;
  }>;
};

export const createOrder = async ({
  products,
  totalPrice,
}: CreateOrderInput) => {
  return await axios.post<string>(`${base_url}/order/create`, {
    products,
    totalPrice,
  });
};
