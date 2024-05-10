export default function UpperHeader() {
  return (
    <header className="hidden md:flex justify-between items-center py-5 px-4 border-b-2 shadow-sm">
        <h1 className="font-bold text-lg">Naka App</h1>
        <nav>
            <ul className="flex justify-between items-center gap-4">
                <li className="cursor-pointer">
                    <img src="/assets/icons/sign_in.svg" alt="sign-in/login" className="w-7 h-7" />
                </li>
                <li className="cursor-pointer flex items-center gap-2">
                    <img src="/assets/icons/bag.svg" alt="shopping bag" className="w-7 h-7" />
                    <div className="flex flex-col text-sm">
                        <span>R$ 0,00</span>
                        <span>0 itens</span>
                    </div>
                </li>
            </ul>
        </nav>   
    </header>
  )
}
