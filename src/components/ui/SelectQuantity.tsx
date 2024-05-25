import { cn } from "@/libs/utils";
import { useState } from "react";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
    quantity: number;
    increaseQuantity: () => void;
    decreaseQuantity: () => void;
    buttonClassName?: string;
    quantityCounterClassName?: string;
};

export default function SelectQuantity({ quantity, increaseQuantity, decreaseQuantity, 
  className, 
  buttonClassName, 
  quantityCounterClassName, 
  }: Props) {
    let defaultButtonStyle = 'px-3 py-1 rounded text-lg';

  return (
    <div className={cn("flex items-center border w-fit p-2 md:space-y-2", className)}>
        <button 
        onClick={decreaseQuantity} 
        className={cn(defaultButtonStyle, buttonClassName, {
          'secondary-text-color': quantity !== 1,
          'cursor-not-allowed': quantity === 1,
        })}
        disabled={quantity === 1}
        >
        -
        </button>
          <span className={cn("font-bold text-xl w-6 h-6 text-center", quantityCounterClassName)}>{quantity}</span>
        <button 
        onClick={increaseQuantity} 
        className={cn(defaultButtonStyle, buttonClassName, {
          'secondary-text-color': quantity < 8,
          'text-black cursor-not-allowed': quantity === 8,
        })}
        >
        &#43;
        </button>
    </div>
  )
}