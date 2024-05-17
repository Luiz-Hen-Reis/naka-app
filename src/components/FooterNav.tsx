import { iconsArray } from "@/utils";

export default function FooterNav() {
  return (
    <footer className="fixed bottom-0 w-full bg-white pt-3 border-t-2 z-10 md:hidden">
      <ul className="flex justify-evenly items-center">
        {iconsArray.map((icon) => (
            <li className="w-5 cursor-pointer flex flex-col items-center">
                <img src={icon.path} alt={icon.iconName} />
                <p className="font-extralight text-sm">{icon.iconName}</p>
            </li>
        ))}
      </ul>
    </footer>
  )
}
