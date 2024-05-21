"use client";

import { Product } from "@/types";
import { API_URI } from "@/helpers";
import { useState } from "react";
import { Button } from "../ui";

interface ProductModalProps extends Product {
  onClose: () => void;
}

export default function ProductModal({ name, price, description, image_url, onClose }: ProductModalProps) {
    const [quantity, setQuantity] = useState(1);

    const increaseQuantity = () => setQuantity(quantity + 1);
    const decreaseQuantity = () => setQuantity(quantity > 1 ? quantity - 1 : 1);
  
    return (
        <div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-50 flex justify-center items-end md:items-center z-50">
          <div className="relative bg-white rounded-lg shadow-lg w-full h-full md:max-w-[1200px] md:h-[580px] flex flex-col md:flex-row md:justify-between md:py-8 md:px-2">

              <button className="text-3xl text-left p-2 md:absolute md:top-3 md:right-3" onClick={onClose}>&times;</button>

              <div className="flex flex-col md:flex-row gap-4 md:gap-0 h-full w-full">
                <div className="md:w-1/2 h-44 md:h-full flex-shrink-0">
                    <img src={`${API_URI}${image_url}`} alt={name} className="object-cover md:object-contain w-full h-full" />
                </div>

                <div className="flex-1 mx-4 flex flex-col justify-between">
                    <div className="space-y-3">
                      <h3 className="text-xl font-bold md:text-2xl">{name}</h3>
                      <p>{description}</p>
                    </div>

                    <div className="flex flex-col gap-4 md:flex-row justify-end">

                    <div className="flex items-center space-x-4 border w-fit p-2">
                      <button 
                        onClick={decreaseQuantity} 
                        className={`px-3 py-1 rounded text-lg ${quantity !== 1 ? 'secondary-text-color' : 'cursor-not-allowed'}`}
                        disabled={quantity === 1}
                        >
                        -
                      </button>
                      <span className="font-bold text-xl w-6 h-6 text-center">{quantity}</span>
                      <button 
                        onClick={increaseQuantity} 
                        className="px-3 py-1 rounded text-lg secondary-text-color">
                        &#43;
                      </button>
                    </div>
                      <Button className="md:flex md:justify-between md:items-center text-lg md:w-64">Añadir <span>$ {price}</span></Button>
                    </div>
                </div>
                
              </div>
          </div>
      </div>
    )
}
