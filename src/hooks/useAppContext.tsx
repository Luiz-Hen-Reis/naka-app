"use client";

import { AppContext } from "@/contexts/appContext";
import { useContext } from "react";

export function useAppContext() {
    return useContext(AppContext);
};