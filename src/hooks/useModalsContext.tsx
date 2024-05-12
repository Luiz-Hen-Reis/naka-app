"use client";

import { ModalsContext } from "@/contexts/modalsContext";
import { useContext } from "react";

export function useModalsContext() {
    return useContext(ModalsContext);
};