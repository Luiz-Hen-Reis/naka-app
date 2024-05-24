"use client";

import { iconsArray } from "@/helpers";
import { useAppContext, useBag } from "@/hooks";

export default function FooterNav() {
  const { bag } = useBag();
  const { handleToggleShoppingBag } = useAppContext();

  return (
    <footer className="fixed bottom-0 w-full bg-white pt-3 border-t-2 z-40 md:hidden">

      <div className={`flex justify-around items-center secondary-bg-color text-white py-4 text-xs mb-2 shadow-md ${bag.length > 0 ? '' : 'hidden'}`} onClick={handleToggleShoppingBag}>
        <div className="relative">
          <img src="/assets/icons/bag_white.svg" alt="bag" />
          <span className="absolute top-0 right-0 w-3 h-3 rounded-full bg-[#EEEEEE] secondary-text-color flex items-center justify-center">{bag.length}</span>
        </div>
        <p>Ver bolsa</p>
        <span>$ 0.00</span>
      </div>

      <ul className="flex justify-evenly items-center">
        {iconsArray.map((icon) => (
            <li className="w-5 cursor-pointer flex flex-col items-center" key={icon.iconName}>
                <img src={icon.path} alt={icon.iconName} />
                <p className="font-extralight text-sm">{icon.iconName}</p>
            </li>
        ))}
      </ul>
    </footer>
  )
}
