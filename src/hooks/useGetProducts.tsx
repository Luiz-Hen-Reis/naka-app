"use client";

import { ApiData, Category } from "@/types";
import { API_URI } from "@/helpers";
import { useQuery } from "@tanstack/react-query";
import axios from "axios"
import { useAppContext } from "./useAppContext";

const fetchProducts = async () => {
  const response = await axios.get<ApiData>(`${API_URI}/api/v1/categories`);
  return response.data;
}


export function useGetProducts() {
  const query = useQuery({
    queryFn: fetchProducts,
    queryKey: ['products'],
  });

  const { search } = useAppContext();

  if (search !== "") {
    const filteredBySearch: Category[] = query.data?.categories.map((category) => ({
      ...category,
      products: category.products.filter((product) => product.name.toLowerCase().includes(search.toLowerCase()))
    })).filter((category) => category.products.length > 0) || [];

    return {
      ...query,
      data: filteredBySearch
    };
  } else {
    return {
      ...query,
      data: query.data?.categories
    }
  }
}
