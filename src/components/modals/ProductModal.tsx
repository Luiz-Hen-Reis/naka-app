"use client";

import { BagProduct, Product } from "@/types";
import { API_URI } from "@/helpers";
import { useState } from "react";
import { Button, CloseButton, SelectQuantity } from "../ui";
import { useBag } from "@/hooks";

interface ProductModalProps extends Product {
  onClose: () => void;
}

export default function ProductModal({ id, name, price, description, image_url, onClose }: ProductModalProps) {
    const [quantity, setQuantity] = useState(1);
    const { addItemToBag } = useBag();

    const increaseQuantity = () => setQuantity(quantity  === 8 ? quantity : quantity + 1);
    const decreaseQuantity = () => setQuantity(quantity > 1 ? quantity - 1 : 1);

    const chosenProduct: BagProduct  = { id, name, price, description, image_url, quantity };

    const handleAddProductToBag = () => {
      addItemToBag(chosenProduct);
      onClose();
    }
  
    return (
        <div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-50 flex justify-center items-end md:items-center z-50">
          <div className="relative bg-white rounded-lg shadow-lg w-full h-full md:max-w-[1200px] md:h-[580px] flex flex-col md:flex-row md:justify-between md:py-8 md:px-2 z-[99]">

              <CloseButton className="md:absolute md:top-3 md:right-3" onClick={onClose} />

              <div className="flex flex-col md:flex-row gap-4 md:gap-0 h-full w-full">
                <div className="md:w-1/2 h-44 md:h-full flex-shrink-0">
                    <img src={`${API_URI}${image_url}`} alt={name} className="object-cover md:object-contain w-full h-full" />
                </div>

                <div className="flex-1 mx-4 flex flex-col justify-between">
                    <div className="space-y-3">
                      <h3 className="text-xl font-bold md:text-2xl">{name}</h3>
                      <p>{description}</p>
                    </div>

                    <div className="flex gap-4 justify-center mb-2 md:justify-end">
                      <SelectQuantity quantity={quantity} increaseQuantity={increaseQuantity} decreaseQuantity={decreaseQuantity}
                        className="p-0"
                        buttonClassName="px-3 py-0"
                        quantityCounterClassName="text-md"
                      />
                    
                      <Button className="flex-1 text-sm md:flex md:justify-between md:items-center md:text-base md:px-4" onClick={handleAddProductToBag}>
                        Añadir <span>$ {quantity * price}</span>
                      </Button>
                    </div>
                </div>
                
              </div>
          </div>
      </div>
    )
}
