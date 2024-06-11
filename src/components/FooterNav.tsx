"use client";

import { useAppContext, useBag } from "@/hooks";
import { 
  Home,
  ShoppingBag as ShoppingBagIcon, 
  ScrollText as OrderListIcon,
  User   
} from "lucide-react";
import { FooterIcon } from "./ui";

export default function FooterNav() {
  const { bag, subtotal } = useBag();
  const { handleToggleShoppingBag, handleToggleAuthModal } = useAppContext();

  return (
    <footer className="fixed bottom-0 w-full bg-white pt-3 border-t-2 md:hidden">

      <div className={`flex justify-around items-center secondary-bg-color text-white py-4 text-xs mb-2 shadow-md z-30 ${bag.length > 0 ? '' : 'hidden'}`} onClick={handleToggleShoppingBag}>
        <div className="relative">
          <ShoppingBagIcon />
          <span className="absolute top-0 right-0 w-3 h-3 rounded-full bg-[#EEEEEE] secondary-text-color flex items-center justify-center">{bag.length}</span>
        </div>
        <p>Ver bolsa</p>
        <span>$ {subtotal}</span>
      </div>
      <ul className="flex justify-evenly items-center z-40">
        <FooterIcon icon={Home} label="Menú" />
        <FooterIcon icon={OrderListIcon} label="Pedidos" />
        <FooterIcon icon={User} label="Perfil" onClick={handleToggleAuthModal} />
      </ul>
    </footer>
  )
}
