import { Product, ProductResponse } from "@/types";
import axios from "axios";

export const base_url = process.env.VUE_APP_API_BASE_URL;

type GetProductsListInput = {
  page: number;
  limit: number;
};

export const getProductsList = async ({
  page,
  limit,
}: GetProductsListInput) => {
  return await axios.get<ProductResponse>(`${base_url}/products`, {
    params: {
      page,
      limit,
    },
  });
};

type GetProductDetailsInput = {
  productId: string;
};

export const getProductDetails = async ({
  productId,
}: GetProductDetailsInput) => {
  return await axios.get<Product>(`${base_url}/products/${productId}`);
};
