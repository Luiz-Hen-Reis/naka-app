"use client";

import { BagProduct } from "@/types";
import { useEffect, useState } from "react";
import { useAppContext } from "./useAppContext";
import { recoverItemsFromLocalStorage } from "@/services";

export default function useBag() {
    const bagLocalStorageKey = 'bag-items';

    const { bag, handleBag } = useAppContext();
    const subtotal = bag.reduce((sum, item) => sum += item.price * item.quantity, 0);
    const deliveryFee = 1000.00;
    const total = subtotal + deliveryFee;
  
    useEffect(() => {
        if (typeof window !== 'undefined') {
            const bagItems = localStorage.getItem(bagLocalStorageKey);
            if (bagItems) {
                handleBag(JSON.parse(bagItems));
            };
        };
    }, []);

    const updateBagAndLocalStorage = (newValue: BagProduct[]) => {
        handleBag(newValue);
        localStorage.setItem(bagLocalStorageKey, JSON.stringify(newValue));
    };

    const addItemToBag = (product: BagProduct) => {
        let bagItems: BagProduct[] = recoverItemsFromLocalStorage(bagLocalStorageKey);

        bagItems.push(product);
        updateBagAndLocalStorage(bagItems);
    };

    const removeItemFromBag = (id: string) => {
        let bagItems: BagProduct[] = recoverItemsFromLocalStorage(bagLocalStorageKey);

        const newBagItems = bagItems.filter((item) => item.id !== id);
        updateBagAndLocalStorage(newBagItems);
    };

    const updateItemQuantity = (newQuantity: number, id: string) => {
        let bagItems: BagProduct[] = recoverItemsFromLocalStorage(bagLocalStorageKey);

        const currentProductIndex = bagItems.findIndex((item) => item.id === id);

        if (currentProductIndex !== -1) {
            let updatedBagItems = bagItems.slice();
            updatedBagItems[currentProductIndex].quantity = newQuantity;
            updateBagAndLocalStorage(updatedBagItems);
        }
    }

    const clearBagItemsFromLocalStorage = () => localStorage.removeItem(bagLocalStorageKey);

    return {
        bag,
        deliveryFee,
        total,
        updateLocalStorage: updateBagAndLocalStorage,
        addItemToBag,
        removeItemFromBag,
        updateItemQuantity,
        clearBagItemsFromLocalStorage,
        subtotal
    }
}
