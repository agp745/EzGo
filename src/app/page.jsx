import { Header } from "../components/header"
import { Footer } from "../components/footer"
import { MenuButtons } from "../components/menuButtons"



export default function Home() {
  
  return (
    <main>
      <Header/>
      <section className="flex justify-center mt-20 text-center">
        <div className="WRAPPER max-w-3xl flex flex-col items-center gap-1">
        
        <h1 className="text-gray-300 text-7xl font-bold ">Unlock the power of sustainable and smarter commutes</h1>
        <div className="right-20 relative flex place-items-center before:absolute after:brightness-150 after:animate-pulse before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-3xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-3xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px]"> </div>
        <h2 className="text-2xl font-light text-gray-500 w-4/6 mt-8 ">
          Empowering you to embrace <span className="text-emerald-600 brightness-110">eco-friendly</span> transportation options and transform your daily commute.
        </h2>
        <MenuButtons />
        </div>
      </section>
      <Footer />
    </main>
  )
}
