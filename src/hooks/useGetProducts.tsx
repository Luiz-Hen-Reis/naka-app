import { ApiData } from "@/types";
import { useQuery } from "@tanstack/react-query";
import axios from "axios"

const API_URL = 'http://localhost:4000';

const fetchProducts = async () => {
  const response = await axios.get<ApiData>(`${API_URL}/api/v1/categories`);
  return response.data;
}


export function useGetProducts() {
  const query = useQuery({
    queryFn: fetchProducts,
    queryKey: ['products'],
  });

  return {
    ...query,
    data: query.data,
  }
}
