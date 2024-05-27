import { useAppContext } from "@/hooks";
import { InputSearchItems } from "./ui";
import { Bike, ChevronDown, PersonStanding } from "lucide-react";
import { DeliveryMethodModal } from "./modals";

export default function SearchItemsBar() {
    const { deliveryMethodModalIsOpen, handleOpenDeliveryMethodModal, deliveryMethod } = useAppContext();

    return (
        <>
            <div className="mt-5 w-full flex flex-wrap gap-4 lg:gap-8 justify-between items-center">
                <InputSearchItems autoFocus />
                <div data-testid="delivery-method-button" className="flex items-center gap-2 cursor-pointer border-2 h-12 rounded-md lg:h-16 px-2 lg:w-36" onClick={handleOpenDeliveryMethodModal}>
                    {deliveryMethod === 'Delivery' ? (
                        <>
                            <Bike color="#FF3E36" />
                            <button className="text-xs lg:text-sm flex items-center justify-center">
                                {deliveryMethod}
                            </button>
                        </>
                    ) : (
                        <>
                            <PersonStanding color="#FF3E36" />
                            <button className="text-xs lg:text-xs flex items-center justify-center">
                                {deliveryMethod}
                            </button>
                        </>
                    )
                    }
                    <ChevronDown color="#FF3E36" />
                </div>
                {deliveryMethodModalIsOpen &&
                    <DeliveryMethodModal />
                }
            </div>
        </>
    );
}
