import { API_URI } from "@/helpers";
import { AuthData } from "@/types";
import axios from "axios";

export const signUpService = async ({ email, password, confirm_password }: AuthData, handleError: (error: string | null) => void) => {
    try {
        const response = await axios.post(`${API_URI}/auth/register`, { name: 'test', email, password, confirm_password });
        return response.data;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            handleError(error.response?.data.error);
        } else {
            throw new Error("An unexpected error occurred");
        };
    };
};