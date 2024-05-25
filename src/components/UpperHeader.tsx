'use client';

import { useAppContext } from "@/hooks";
import { InputSearchItems } from "./ui";

export default function UpperHeader() {
    const { isStickyVisible, handleToggleShoppingBag, bag } = useAppContext();

  return (
    <header className="hidden md:flex justify-between items-center py-5 h-24 px-4 border-b-2 shadow-sm sticky top-0 z-20 bg-white gap-4">
        <h1 className="font-bold text-lg">Naka App</h1>
        { isStickyVisible && <InputSearchItems /> }
        <nav>
            <ul className="flex justify-between items-center gap-4" onClick={handleToggleShoppingBag}>
                <li className="cursor-pointer">
                    <img src="/assets/icons/sign_in.svg" alt="sign-in/login" className="w-7 h-7" />
                </li>
                <li className={`cursor-pointer flex items-center  ${bag.length > 0 ? 'secondary-bg-color rounded-3xl p-2 text-white' : ''}`}>
                    <img src="/assets/icons/bag.svg" alt="shopping bag" className="w-7 h-7" />
                    <div className="flex flex-col text-xs">
                        <span>R$ 0,00</span>
                        <span>{bag.length} itens</span>
                    </div>
                </li>
            </ul>
        </nav>   
    </header>
  )
}
