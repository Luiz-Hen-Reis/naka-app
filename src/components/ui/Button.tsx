import { cn } from "@/libs/utils";
import { ReactNode } from "react"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
}

export default function Button({ children, className, ...props }: ButtonProps) {
  return (
    <button  className={cn('text-white secondary-bg-color my-2 py-4 px-2 rounded-sm shadow-md', className)} 
    {...props}
    >
        {children}
    </button>
  )
}