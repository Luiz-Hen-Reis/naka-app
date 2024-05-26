'use client';

import { useAppContext, useBag } from "@/hooks";
import { InputSearchItems } from "./ui";
import { LogIn, ShoppingBag as ShoppingBagIcon } from "lucide-react";

export default function UpperHeader() {
    const { isStickyVisible, handleToggleShoppingBag } = useAppContext();
    const { bag, subtotal } = useBag();

  return (
    <header className="hidden md:flex justify-between items-center py-5 h-24 px-4 border-b-2 shadow-sm sticky top-0 z-20 bg-white gap-4">
        <h1 className="font-bold text-lg">Naka App</h1>
        { isStickyVisible && <InputSearchItems /> }
        <nav>
            <ul className="flex justify-between items-center gap-4" onClick={handleToggleShoppingBag}>
                <li className="cursor-pointer">
                    <LogIn color="#FF3E36" />
                </li>
                <li className={`cursor-pointer flex items-center gap-2 ${bag.length > 0 ? 'secondary-bg-color rounded-3xl p-2 text-white' : ''}`}>
                    <ShoppingBagIcon width={20} height={20} />
                    <div className="flex flex-col text-xs">
                        <span>$ {subtotal}</span>
                        <span>{bag.length} itens</span>
                    </div>
                </li>
            </ul>
        </nav>   
    </header>
  )
}
