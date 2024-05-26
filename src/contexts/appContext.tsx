"use client";

import { BagProduct } from "@/types";
import { 
    ChangeEvent,
    MutableRefObject,
    ReactNode,
    createContext,
    useEffect,
    useRef,
    useState } from "react";

type Props = {
    children: ReactNode;
}

type AppContextType = {
    deliveryMethodModalIsOpen: boolean;
    shoppingBagIsOpen: boolean;
    handleOpenDeliveryMethodModal: () => void;
    handleCloseDeliveryMethodModal: () => void;
    handleToggleShoppingBag: () => void;
    isStickyVisible: boolean;
    ref: MutableRefObject<HTMLDivElement | null>;
    search: string;
    handleSearch: (e: ChangeEvent<HTMLInputElement>) => void;
    bag: BagProduct[];
    handleBag: (newItem: BagProduct[]) => void;
}

export const AppContext = createContext({} as AppContextType);

export const AppContextProvider = ({ children }: Props) => {
    const [deliveryMethodModalIsOpen,
         setDeliveryMethodModalIsOpen] = useState<boolean>(false);
    const [shoppingBagIsOpen, setShoppingBagIsOpen] = useState<boolean>(false);
    const [isStickyVisible, setIsStickyVisible] = useState<boolean>(false);
    const [bag, setBag] = useState<BagProduct[]>([]);
    const [search, setSearch] = useState<string>('');
    const ref = useRef<HTMLDivElement | null>(null);
 
    const handleOpenDeliveryMethodModal = () => setDeliveryMethodModalIsOpen(true);
    const handleCloseDeliveryMethodModal = () => setDeliveryMethodModalIsOpen(false);

    const handleToggleShoppingBag = () => setShoppingBagIsOpen(!shoppingBagIsOpen);

    const handleSearch = (e: ChangeEvent<HTMLInputElement>) => setSearch(e.target.value);

    const handleBag = (items: BagProduct[]) => setBag(items);
    
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
                shoppingBagIsOpen,
                handleOpenDeliveryMethodModal, 
                handleCloseDeliveryMethodModal,
                handleToggleShoppingBag,
                isStickyVisible,
                ref,
                search,
                handleSearch,
                bag,
                handleBag,
            }}>
            {children}
        </AppContext.Provider>
    )
}