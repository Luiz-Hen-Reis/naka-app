import { Product } from "@/types";

interface ProductItemProps extends Product {}

const image = 'https://blogsakura.com.br/wp-content/uploads/2021/11/Blog1_01NOV21-1024x558.jpg';

export default function ProductItem({ name, price, description }: ProductItemProps) {
  return (
    <div className='flex justify-between items-start gap-2 py-4 md:px-4 md:border rounded-sm md:shadow-sm cursor-pointer'>
        <div className='flex flex-col'>
            <h3 className='font-bold pb-4 md:text-lg'>{name}</h3>
            <p className='text-xs text-[#717171] pb-5'>{description}</p>
            <span>$ {price}</span>
        </div>

        <div>
            <div className='w-24 h-16'>
                <img src={image} alt={name} />
            </div>
        </div>
</div>
  )
}
