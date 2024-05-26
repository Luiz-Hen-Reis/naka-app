import { BagProduct } from "@/types";

export default function recoverItemsFromLocalStorage(key: string): BagProduct[] {
    try {
        const storedItems = localStorage.getItem(key);

        if (storedItems) {
            return JSON.parse(storedItems) as BagProduct[];
        }
    } catch (error) {
        console.error(`Error while parsing localStorage item (${key}):`, error);
    }

    return [];
};