"use client";

import { useModalsContext } from "@/hooks";
import DeliveryMethodOption from "./utils/DeliveryMethodOption";
import { useEffect, useRef, useState } from "react";

export default function DeliveryMethodModal() {
  const { handleCloseDeliveryMethodModal } = useModalsContext();
  const modalRef = useRef<HTMLDivElement>(null);
  const [selectedOption, setSelectedOption] = useState<"Delivery" | "Take Away">("Delivery");

  const handleClickOutside = (e: MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      handleCloseDeliveryMethodModal();
    }
  }

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleToggleOption = (option: "Delivery" | "Take Away") => setSelectedOption(option);

  const handleOptionSelect = () => {
    console.log("Opção de delivery escolhida: ", selectedOption);
    handleCloseDeliveryMethodModal();
  }

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-50 flex justify-center items-end z-50 md:items-center">
        <div className=" bg-white rounded-lg shadow-lg p-6 flex-1 md:max-w-[400px] flex flex-col justify-center items-center" ref={modalRef}>
            <h2 className="font-bold text-lg">¿Cómo le gustaría recibir su pedido?</h2>
            <div className="mt-4 w-full flex flex-col justify-center items-center gap-4">
                <DeliveryMethodOption optionName="Delivery" optionDescription="Nosotros te lo llevamos" selected={selectedOption ==="Delivery"} onSelect={() => handleToggleOption("Delivery")} />
                <DeliveryMethodOption optionName="Take Away" optionDescription="Vós recoges localmente" selected={selectedOption ==="Take Away"} onSelect={() => handleToggleOption("Take Away")} />
                <button className="w-full secondary-bg-color text-white p-4 rounded-md mx-4 font-bold" onClick={handleOptionSelect}>Confirmar el método de recepción</button>
            </div>
        </div>
    </div>
  )
}
