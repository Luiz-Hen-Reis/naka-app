import ProductItemSkeleton from "./ProductItemSkeleton";

export default function CategoryItemSkeleton() {
  return (
    <div className='flex flex-col'>
      <div className='py-8'>
        <div className='bg-gray-300 rounded w-48 h-6 mb-4 md:w-64 md:h-8'></div>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
        {Array(8).fill(0).map((_, index) => (
          <ProductItemSkeleton key={index} />
        ))}
      </div>
    </div>
  );
}
