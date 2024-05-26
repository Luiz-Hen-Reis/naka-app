import { LucideProps } from "lucide-react";


interface FooterIconProps {
    icon: React.ComponentType<LucideProps>;
    label: string;
}

export default function FooterIcon({ icon: Icon, label }: FooterIconProps) {
  return (
    <li className="w-5 cursor-pointer flex flex-col items-center">
        <Icon />
        <p className="font-extralight text-sm">{label}</p>
    </li>
  )
}
