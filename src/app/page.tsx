"use client";

import { 
  CategoryItem, 
  CategoryItemSkeleton, 
  MainHeader, 
  SearchItemsBar } from "@/components";
import { useGetProducts } from "@/hooks";

export default function Home() {
  const { data, isLoading } = useGetProducts();

  return (
    <>
      <MainHeader />
      <div className="app-container">
        <SearchItemsBar />
        {isLoading &&
          <CategoryItemSkeleton />
        }
        {!isLoading &&
          <>
            {data?.categories.map((category) => (
            <CategoryItem {...category} key={category.category_id} />
          ))}
          </>
        }
      </div>
    </>
  )
}
