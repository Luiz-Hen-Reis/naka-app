"use client";

import { ReactNode } from "react"
import { ModalsProvider } from "@/contexts/modalsContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

type Props = {
    children: ReactNode;
}

const queryClient = new QueryClient();

export default function Providers({ children }: Props) {
  return (
    <>
    <ModalsProvider>
        <QueryClientProvider client={queryClient}>
            {children}
        </QueryClientProvider>
    </ModalsProvider>
    </>
  )
}