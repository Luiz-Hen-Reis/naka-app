'use client';

import { useAppContext, useBag } from "@/hooks";
import { Button, CloseButton, EmptyBag, PriceDetailRow } from "./ui";
import BagProductItem from "./BagProductItem";

export default function ShoppingBag() {
    const { handleToggleShoppingBag } = useAppContext();
    const { bag, subtotal, deliveryFee, total } = useBag();

    return (
        <div className="w-full h-full fixed z-40">
            <div className="flex flex-col fixed w-full h-full z-50 bg-white md:shadow-lg md:right-0 md:w-[500px]">
                <CloseButton onClick={handleToggleShoppingBag} />

                <div className="flex-1 flex flex-col mx-8 md:mx-12 overflow-y-hidden">
                    <div className="flex-1 flex flex-col items-center overflow-y-auto pb-24">
                        {bag.length === 0 ? (
                            <EmptyBag />
                        ) : (
                            <>
                                {bag.map((product) => (
                                    <BagProductItem key={product.id} {...product} />
                                ))}
                            </>
                        )}

                        <div className="flex flex-col space-y-4 mb-4 md:mb-28 justify-between w-full mt-6">
                          <PriceDetailRow label="Subtotal" value={subtotal.toString()} />
                          <PriceDetailRow label="Tasa de Envio" value={deliveryFee.toString()} />  
                        </div>
                        <div className="fixed bottom-0 bg-white z-40 w-96 md:w-[420px] flex flex-col"> 
                          <PriceDetailRow label="Total" value={bag.length === 0 ? '0000,00' : total.toFixed(2).toString()} className="mx-8 md:mx-0 font-bold text-lg" />  
                          <Button disabled={bag.length === 0} className="disabled:opacity-50">Continuar</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
