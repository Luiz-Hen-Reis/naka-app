'use client';

import { Product } from "@/types";
import { API_URI } from "@/helpers";
import ProductModal from "./modals/ProductModal";
import { useState } from "react";

interface ProductItemProps extends Product {}

export default function ProductItem({ name, price, description, image_url, id }: ProductItemProps) {
  const [isProductModalOpen, setIsProductModalOpen] = useState<boolean>(false);

  const handleOpenProductModal = () => setIsProductModalOpen(true);
  const handleCloseProductModal = () => setIsProductModalOpen(false);

  const productProps = { id, name, price, image_url, description, onClose: handleCloseProductModal };

  return (
      <>
        <div className='flex justify-between items-start gap-2 py-4 md:px-4 md:border rounded-sm md:shadow-sm cursor-pointer hover:border-[#717171] transition' onClick={handleOpenProductModal}>
          <div className='flex flex-col'>
              <h3 className='font-bold pb-4 md:text-lg'>{name}</h3>
              <p className='text-xs text-[#717171] pb-5'>{description}</p>
              <span>$ {price}</span>
          </div>

          <div>
              <div className='w-24 h-16'>
                  <img src={`${API_URI}${image_url}`} alt={name} className="object-cover" />
              </div>
          </div>
        </div>
        {isProductModalOpen && <ProductModal {...productProps} />}
      </>
  )
}
