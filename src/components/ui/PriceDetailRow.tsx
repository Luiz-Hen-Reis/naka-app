import { cn } from "@/libs/utils";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
    label: string;
    value: string;
}


export default function PriceDetailRow({ label, value, className }: Props) {
  return (
    <div className={cn('flex justify-between text-sm', className)}>
        <div>{label}</div>
        <div>$ {value}</div>
    </div>
  )
}
