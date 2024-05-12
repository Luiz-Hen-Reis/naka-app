import { MainHeader, SearchItemsBar } from "@/components";

export default function Home() {
  return (
    <>
      <MainHeader />
      <div className="app-container">
        <SearchItemsBar />
      </div>
    </>
  )
}
