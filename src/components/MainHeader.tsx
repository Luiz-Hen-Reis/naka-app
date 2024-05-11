export default function MainHeader() {
  return (
    <header className="w-full flex flex-col">
        <div data-testid="banner" className="w-full h-28 md:h-48 rounded-md bg-[url('/assets/images/banner.png')] bg-center bg-cover">
        </div>
        <div className="app-container">
            <div className="flex items-center gap-4 lg:gap-8 w-11 h-11 md:w-[70px] md:h-[70px] lg:w-[75px] lg:h-[75px]">
                <img src="/assets/images/logo.jpg" alt="Nakapoke logo" className="rounded-full" />
                <h1 className="text-lg lg:text-4xl whitespace-nowrap">Nakapoke Shop</h1>
            </div>
        </div>
    </header>
  )
}
