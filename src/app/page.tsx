"use client";

import { 
  CategoryItem, 
  CategoryItemSkeleton, 
  MainHeader, 
  SearchItemsBar, 
  StickySearchBar
} from "@/components";
import { useAppContext, useGetProducts } from "@/hooks";

export default function Home() {
  const { data, isLoading } = useGetProducts();
  const { isStickyVisible, ref } = useAppContext();

  return (
    <>
      <MainHeader />
      <div className="app-container">
        <div ref={ref}></div>
        { !isStickyVisible ? (
          <SearchItemsBar />
        ) : (
          <StickySearchBar />
        )}
        {isLoading ? (
          <CategoryItemSkeleton />
        ) : (
          <>
             { data?.map((category) => (
                <CategoryItem {...category} key={category.category_id} />
              ))
              }
          </>
        )}
      </div>
    </>
  );
}
