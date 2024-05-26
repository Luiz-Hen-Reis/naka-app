"use client";

import { useState } from "react";
import { InputSearchItems } from "./ui";
import { Search } from "lucide-react";

export default function StickySearchBar() {
    const [openSearchBar, setOpenSearchBar] = useState(false);

    const handleToggleSearchBar = () => setOpenSearchBar(!openSearchBar);

  return (
    <header className="sticky top-0 bg-white py-4 z-20 md:hidden">
        <div className="flex justify-between items-center mb-4">
            <span></span>
            <h1 className="font-bold text-lg ">Naka App</h1>
            <button onClick={handleToggleSearchBar}>
                <Search color="#FF3E36" />
            </button>
        </div>
            <div>{ openSearchBar && <InputSearchItems /> }</div>
    </header>
  )
}
