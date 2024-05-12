"use client";

type Props = {
    children: ReactNode;
}

import { ReactNode, createContext, useState } from "react";

export const ModalsContext = createContext({
    deliveryMethodModalIsOpen: false,
    handleOpenDeliveryMethodModal: () => {},
    handleCloseDeliveryMethodModal: () => {},
});

export const ModalsProvider = ({ children }: Props) => {
    const [deliveryMethodModalIsOpen, setDeliveryMethodModalIsOpen] = useState<boolean>(false);

    const handleOpenDeliveryMethodModal = () => setDeliveryMethodModalIsOpen(true);
    const handleCloseDeliveryMethodModal = () => setDeliveryMethodModalIsOpen(false);

    return (
        <ModalsContext.Provider value={{ 
                deliveryMethodModalIsOpen, 
                handleOpenDeliveryMethodModal, 
                handleCloseDeliveryMethodModal
            }}>
            {children}
        </ModalsContext.Provider>
    )
}