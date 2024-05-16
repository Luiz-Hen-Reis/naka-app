import { ApiData } from "@/types";
import { API_URI } from "@/utils";
import { useQuery } from "@tanstack/react-query";
import axios from "axios"


const fetchProducts = async () => {
  const response = await axios.get<ApiData>(`${API_URI}/api/v1/categories`);
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
