"use client";

import { useAppContext } from "@/hooks";
import { Search } from "lucide-react";
import { InputHTMLAttributes } from "react";

interface InputSearchItemsProps extends InputHTMLAttributes<HTMLInputElement> {};

export default function InputSearchItems({ ...props }: InputSearchItemsProps) {
    const { search, handleSearch } = useAppContext();

  return (
        <div className="rounded-md flex-1 flex items-center lg:gap-4 bg-[#e8e8e8] border-2 h-11 lg:h-16 lg:bg-transparent lg:p-4">
            <Search color="#FF3E36" />
            <input
                {...props}
                type="text"
                placeholder="Buscar en el menú"
                className="flex-1 h-full outline-none bg-transparent ml-2"
                value={search}
                onChange={handleSearch}
            />
        </div>
    )
}
