"use client";

import { API_URI } from "@/helpers";
import { signInService, signUpService } from "@/services";
import { AuthData } from "@/types";
import { useMutation } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";

export function useAuth() {
    const [serverError, setServerError] = useState<string | null>(null);
    const router = useRouter();

    const handleError = (error: string | null) => {
        setServerError(error)
    }

    const { mutate: signUp } = useMutation({
        mutationFn: (data: AuthData) => signUpService(data, handleError),
        onSuccess: (response) => {
            console.log('sucesso!', response);
        },
        onError: (error) => {
            if (axios.isAxiosError(error)) console.log(error.response?.data);
        }
    });

    const { mutate: signIn } = useMutation({
        mutationFn: (data: AuthData) => signInService(data, handleError),
        onSuccess: (response) => {
            console.log('sucesso!', response);
        },
        onError: (error) => {
            if (axios.isAxiosError(error)) console.log(error.response?.data);
        }
    });

    return {
        signUp,
        signIn,
        serverError
    }
}
