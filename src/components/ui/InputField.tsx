"use client";

import React from 'react';
import { cn } from "@/libs/utils";
import { UseFormRegisterReturn } from "react-hook-form";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
    label: string;
    type: React.HTMLInputTypeAttribute;
    placeholder: string;
    id: string;
    register: UseFormRegisterReturn;
    errorMessage: string | undefined;
}

export default function InputField({ label, className, type, placeholder, id, register, errorMessage, ...props }: Props) {
  return (
    <div className="flex flex-col gap-2">
        <label htmlFor={id} className="px-2 text-sm">{label}:</label>
        <input 
            type={type} 
            id={id} 
            placeholder={placeholder} 
            className={cn("h-12 outline-none border-2 px-2 rounded-lg", className)} 
            {...register} 
            {...props} 
        />
        <p className="secondary-text-color text-xs">{errorMessage}</p>
    </div>
  );
}
