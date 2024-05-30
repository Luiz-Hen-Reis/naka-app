import { LucideProps } from "lucide-react";

interface FooterIconProps extends React.HTMLAttributes<HTMLLIElement> {
    icon: React.ComponentType<LucideProps>;
    label: string;
}

export default function FooterIcon({ icon: Icon, label, ...props }: FooterIconProps) {

  return (
    <li className="w-5 cursor-pointer flex flex-col items-center" {...props}>
        <Icon />
        <p className="font-extralight text-sm">{label}</p>
    </li>
  )
}
