"use client";

import { useBag } from "@/hooks";
import { BagProduct } from "@/types"
import { useState } from "react";
import ProductModal from "./modals/ProductModal";

type Props = BagProduct;

export default function BagProductItem({ id, name, price, quantity, description, image_url }: Props) {
    const [isProductModalOpen, setIsProductModalOpen] = useState<boolean>(false);
    const { removeItemFromBag } = useBag();

    const handleOpenProductModal = () => setIsProductModalOpen(true);
    const handleCloseProductModal = () => setIsProductModalOpen(false);

    const currentProductProps = { id, name, price, quantity, description, 
        image_url, currentQuantity: quantity, onClose: handleCloseProductModal };

  return (
    <div className="flex flex-col justify-between w-full border-y py-4 gap-4">
        <div className="flex items-center justify-between text-sm md:text-base font-medium">
            <h4>{quantity}x {name}</h4>
            <span>$ {price}</span>
        </div>

        <div className="text-sm font-light">
            <p>{description}</p>
        </div>

        <div className="flex items-center text-sm gap-3 md:gap-8">
            <button className="secondary-text-color" onClick={handleOpenProductModal}>Editar</button>
            <button className="text-gray-600/75" onClick={() => removeItemFromBag(id)}>Eliminar</button>
        </div>
        {isProductModalOpen && <ProductModal {...currentProductProps} isUpdateProduct />}
    </div>
  )
}
