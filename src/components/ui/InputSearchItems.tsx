"use client";

import { useSearchContext } from "@/hooks";
import { InputHTMLAttributes } from "react";

interface InputSearchItemsProps extends InputHTMLAttributes<HTMLInputElement> {};

export default function InputSearchItems({  }: InputSearchItemsProps) {
    const { search, handleSearch } = useSearchContext();

  return (
        <div className="rounded-md flex-1 flex items-center lg:gap-4 bg-[#e8e8e8] border-2 h-11 lg:h-16 lg:bg-transparent lg:border-2 lg:p-4">
            <img src="/assets/icons/search.svg" alt="search" className="w-4 h-4" />
            <input
                type="text"
                placeholder="Buscar en el menú"
                className="flex-1 h-full outline-none bg-transparent ml-2"
                value={search}
                onChange={handleSearch}
            />
        </div>
    )
}
