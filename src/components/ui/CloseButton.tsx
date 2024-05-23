import { cn } from "@/libs/utils";

type CloseButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>

export default function CloseButton({ className, ...props }: CloseButtonProps) {
  return (
    <button className={cn('text-3xl text-left p-2', className)} {...props}>&times;</button>
  )
}
