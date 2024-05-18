import { useModalsContext } from "@/hooks";
import DeliveryMethodModal from "./modals/DeliveryMethodModal";
import { InputSearchItems } from "./ui";

export default function SearchItemsBar() {
    const { deliveryMethodModalIsOpen, handleOpenDeliveryMethodModal } = useModalsContext();

    return (
        <>
            <div className="mt-5 w-full flex flex-wrap gap-4 lg:gap-8 justify-between items-center">
                <InputSearchItems />
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
