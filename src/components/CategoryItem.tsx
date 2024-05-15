import { Category } from "@/types";
import ProductItem from "./ProductItem";

interface CategoryItemProps extends Category {}

export default function CategoryItem({ category_name, products }: CategoryItemProps ) {
  return (
    <div className='flex flex-col'>
        <h2 className='py-8 text-lg font-bold md:text-xl'>{category_name}</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
            {products.map((product) => (
               <ProductItem {...product} key={product.id} />
            ))}
        </div>
    </div>
  )
}
