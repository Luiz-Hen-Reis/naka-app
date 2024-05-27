import { ChangeEvent, MutableRefObject } from "react";
import { BagProduct } from "./bagProduct";
import { IDeliveryMethod } from "./deliveryMethod";

export type AppContextType = {
    deliveryMethodModalIsOpen: boolean;
    shoppingBagIsOpen: boolean;
    search: string;
    bag: BagProduct[];
    deliveryMethod: IDeliveryMethod;
    authModalIsOpen: boolean;
    isStickyVisible: boolean;
    ref: MutableRefObject<HTMLDivElement | null>;
    handleOpenDeliveryMethodModal: () => void;
    handleCloseDeliveryMethodModal: () => void;
    handleToggleShoppingBag: () => void;
    handleSearch: (e: ChangeEvent<HTMLInputElement>) => void;
    handleBag: (newItem: BagProduct[]) => void;
    handleChangeDeliveryMethod: (selectedOption : IDeliveryMethod) => void;
    handleToggleAuthModal: () => void;
}