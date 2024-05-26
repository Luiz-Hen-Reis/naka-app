"use client";

import { 
  CategoryItem, 
  CategoryItemSkeleton, 
  MainHeader, 
  SearchItemsBar, 
  ShoppingBag, 
  StickySearchBar
} from "@/components";
import { useAppContext, useGetProducts } from "@/hooks";

export default function Home() {
  const { data, isLoading } = useGetProducts();
  const { isStickyVisible, ref, shoppingBagIsOpen } = useAppContext();

  return (
    <>
      <MainHeader />
      { shoppingBagIsOpen && <ShoppingBag /> }
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
