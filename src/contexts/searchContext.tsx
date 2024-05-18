"use client";

import { ChangeEvent, ReactNode, createContext, useState } from "react";

type Props = {
    children: ReactNode;
}

export const SearchContext = createContext({
    search: '',
    handleSearch: (e: ChangeEvent<HTMLInputElement>) => {}
});

export const SearchProvider = ({ children }: Props) => {
    const [search, setSearch] = useState<string>('');

    const handleSearch = (e: ChangeEvent<HTMLInputElement>) => setSearch(e.target.value);

    return (
        <SearchContext.Provider value={{
            search,
            handleSearch
        }}>
            {children}
        </SearchContext.Provider>
    )
}