import { cn } from "@/libs/utils";
import { useState } from "react";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
    quantity: number;
    increaseQuantity: () => void;
    decreaseQuantity: () => void;
    buttonClassName?: string;
    quantityCounterClassName?: string;
};

export default function SelectQuantity({ quantity, increaseQuantity, decreaseQuantity, className, ...props }: Props) {
    

  return (
    <div className={cn("flex items-center space-x-4 border w-fit p-2", className)}>
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
  )
}
