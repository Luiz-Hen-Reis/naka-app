'use client';

import { useAppContext, useAuth } from "@/hooks";
import { Button, CloseButton, InputField } from "../ui";
import { useEffect, useState } from "react";
import { z } from "zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { authSchema as getAuthSchema } from "@/schemas";
import axios from "axios";


export default function AuthModal() {
    const [isRegister, setIsRegister] = useState<boolean>(false);
    const [formError, setFormError] = useState<string | null>(null);
    const { handleToggleAuthModal } = useAppContext();
    const { signUp, signIn, serverError } = useAuth();

    const authSchema = getAuthSchema(isRegister);

    type FormData = z.infer<typeof authSchema>;
    
    const { register, handleSubmit, formState: { errors }, reset, clearErrors } = useForm<FormData>({
        resolver: zodResolver(authSchema)
    });

    const onSubmit: SubmitHandler<FormData> =  (data) => {
        try {
            if (isRegister) {
                signUp(data);
            } else {
                signIn(data);
            }
        } catch (error) {
            if (axios.isAxiosError(error) && error.response?.status === 422) {
                setFormError(error.response.data.error);
                console.log(formError);
            } else {
                setFormError("An unexpected error occurred");
            }
        }
    };

    useEffect(() => {
        reset();
        clearErrors();
    }, [isRegister]);
 
    return (
        <div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-50 flex justify-center items-center z-50 md:items-center">
            <div className="bg-white flex flex-col rounded-lg shadow-lg w-full h-full md:h-auto md:p-8 md:max-w-[400px] relative">
                <CloseButton onClick={handleToggleAuthModal} className="absolute left-0 top-0" />

                <form className="flex-1 flex flex-col justify-center space-y-6 mx-8" onSubmit={handleSubmit(onSubmit)}>
                    <div className="self-center flex flex-col justify-center items-center">
                        <div className="w-16 h-w-16">
                            <img src="/assets/images/logo.jpg" alt="Nakapoke logo" className="rounded-full" />
                        </div>
                        <h1 className="font-bold text-lg">Naka App</h1>
                    </div>

                    <InputField 
                        className={errors.email || serverError !== null ? 'border-[#FF3E36]' : ''}
                        id="email" 
                        label="E-mail" 
                        placeholder="Su email" 
                        type="email" 
                        register={register("email")}
                        errorMessage={errors.email ? errors.email.message : (serverError ? serverError : '')}
                    />

                    <InputField 
                        className={errors.password ? 'border-[#FF3E36]' : ''}
                        id="pass" 
                        label="Contraseña" 
                        placeholder="Su contraseña" 
                        type="password" 
                        register={register("password")} 
                        errorMessage={errors.password && errors.password.message}
                    />

                    {isRegister && (
                        <>
                            <InputField 
                                className={errors.confirm_password ? 'border-[#FF3E36]' : ''}
                                id="confirm-pass" 
                                label="Confirmar la contraseña" 
                                placeholder="Su contraseña nuevamente" 
                                type="password" 
                                register={register("confirm_password")}
                                errorMessage={errors.confirm_password && errors.confirm_password.message}
                            />
                        </>
                    )}

                    <Button type="submit" className="rounded-lg disabled:opacity-40 disabled:cursor-not-allowed" disabled={errors.email || errors.password || errors.confirm_password ? true : false}>Accender</Button>

                    <p className="secondary-text-color text-xs ml-2 cursor-pointer" onClick={() => setIsRegister(!isRegister)}>
                        {!isRegister ? 'Aun no tengo acceso' : 'Ya tengo acceso'}
                    </p>
                </form>
            </div>
        </div>
    );
}
