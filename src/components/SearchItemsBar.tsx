"use client";

import { useModalsContext } from "@/hooks";
import DeliveryMethodModal from "./modals/DeliveryMethodModal";

export default function SearchItemsBar() {
    const { deliveryMethodModalIsOpen, handleOpenDeliveryMethodModal } = useModalsContext();

    return (
        <>
            <div className="mt-5 w-full flex flex-wrap gap-4 lg:gap-8 justify-between items-center">
                <div className="rounded-md flex-1 flex items-center lg:gap-4 bg-[#e8e8e8] border-2 h-11 lg:h-16 lg:bg-transparent lg:border-2 lg:p-4">
                    <img src="/assets/icons/search.svg" alt="search" className="w-4 h-4" />
                    <input
                        type="text"
                        placeholder="Buscar en el menú"
                        className="flex-1 h-full outline-none bg-transparent ml-2"
                    />
                </div>

                <div data-testid="delivery-method-button" className="flex items-center gap-2 cursor-pointer border-2 h-12 rounded-md lg:h-16 px-2 lg:w-36" onClick={handleOpenDeliveryMethodModal}>
                <span><img src="/assets/icons/delivery.svg" alt="takeaway icon" /></span>
                    <button className="text-xs lg:text-sm flex items-center justify-center">
                        Delivery
                    </button>
                    <span className="secondary-text-color">&#8744;</span>
                </div>
                {deliveryMethodModalIsOpen &&
                    <DeliveryMethodModal />
                }
            </div>
            
        </>
        );
}
