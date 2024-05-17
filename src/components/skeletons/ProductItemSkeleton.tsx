export default function ProductItemSkeleton() {
  return (
    <div className='flex justify-between items-start gap-2 py-4 md:px-4 md:border rounded-sm md:shadow-sm cursor-pointer animate-pulse'>
      <div className='flex flex-col'>
        <div className='bg-gray-300 rounded w-32 h-6 mb-4'></div>
        <div className='bg-gray-200 rounded w-48 h-4 mb-5'></div>
        <div className='bg-gray-300 rounded w-16 h-6'></div>
      </div>

      <div>
        <div className='w-24 h-16 bg-gray-200 rounded'></div>
      </div>
    </div>
  );
}
