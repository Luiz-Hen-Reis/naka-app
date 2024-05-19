"use client";

import { ChangeEvent, MutableRefObject, ReactNode, createContext, useEffect, useRef, useState } from "react";

type Props = {
    children: ReactNode;
}

type AppContextType = {
    deliveryMethodModalIsOpen: boolean,
    handleOpenDeliveryMethodModal: () => void;
    handleCloseDeliveryMethodModal: () => void;
    isStickyVisible: boolean;
    ref: MutableRefObject<HTMLDivElement | null>;
    search: string;
    handleSearch: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const AppContext = createContext({} as AppContextType);

export const AppContextProvider = ({ children }: Props) => {
    const [deliveryMethodModalIsOpen, setDeliveryMethodModalIsOpen] = useState<boolean>(false);
    const [isStickyVisible, setIsStickyVisible] = useState<boolean>(false);
    const [search, setSearch] = useState<string>('');
    const ref = useRef<HTMLDivElement | null>(null);
 
    const handleOpenDeliveryMethodModal = () => setDeliveryMethodModalIsOpen(true);
    const handleCloseDeliveryMethodModal = () => setDeliveryMethodModalIsOpen(false);

    const handleSearch = (e: ChangeEvent<HTMLInputElement>) => setSearch(e.target.value);
    
    useEffect(() => {
        const handleScroll = () => {
            if (ref.current) {
                const { top } = ref.current.getBoundingClientRect();
                setIsStickyVisible(top < 0);
            }
            };
            
            window.addEventListener('scroll', handleScroll);
        
            return () => window.removeEventListener('scroll', handleScroll);
        }, []);
        
        
    return (
        <AppContext.Provider value={{ 
                deliveryMethodModalIsOpen, 
                handleOpenDeliveryMethodModal, 
                handleCloseDeliveryMethodModal,
                isStickyVisible,
                ref,
                search,
                handleSearch
            }}>
            {children}
        </AppContext.Provider>
    )
}