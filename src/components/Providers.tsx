"use client";

import { ReactNode } from "react"
import { AppContextProvider } from "@/contexts/appContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

type Props = {
    children: ReactNode;
}

const queryClient = new QueryClient();

export default function Providers({ children }: Props) {
  return (
    <>
        <AppContextProvider>
            <QueryClientProvider client={queryClient}>
                {children}
            </QueryClientProvider>
        </AppContextProvider>
    </>
  )
}
