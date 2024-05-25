"use client";

import { BagProduct } from "@/types";
import { useEffect, useState } from "react";
import { useAppContext } from "./useAppContext";

export default function useBag() {
    const bagLocalStorageKey = 'bag-items';

    const { bag, handleBag } = useAppContext();
  
    useEffect(() => {
        if (typeof window !== 'undefined') {
            const bagItems = localStorage.getItem(bagLocalStorageKey);
            if (bagItems) {
                handleBag(JSON.parse(bagItems));
            };
        };
    }, []);

    const updateLocalStorage = (newValue: BagProduct[]) => {
        handleBag(newValue);
        localStorage.setItem(bagLocalStorageKey, JSON.stringify(newValue));
    }

    const addItemToBag = (product: BagProduct) => {
        let bagItems: BagProduct[] = [];

        const storedItems = localStorage.getItem(bagLocalStorageKey);

        if (storedItems) {
            bagItems = JSON.parse(storedItems);
        }

        bagItems.push(product);
        localStorage.setItem(bagLocalStorageKey, JSON.stringify(bagItems));
        handleBag(bagItems);
    }

    const clearBagItemsFromLocalStorage = () => localStorage.removeItem(bagLocalStorageKey);

    return {
        bag,
        updateLocalStorage,
        addItemToBag,
        clearBagItemsFromLocalStorage
    }
}
