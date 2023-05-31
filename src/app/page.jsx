import Link from "next/link"
import Image from "next/image"
import { Header } from "../components/header"
import { Footer } from "../components/footer"

export default function Home() {

  const tagline = 'Unlock the power of sustainable and smarter commutes'
 
  return (
    <main>
      <Header/>
      <section className="flex justify-center mt-20 text-center">
        <div className="WRAPPER max-w-3xl flex flex-col items-center gap-1">
        
        <h1 className="text-gray-300 text-7xl font-bold ">{tagline}</h1>
        <div className="right-20 relative flex place-items-center before:absolute after:brightness-150 after:animate-pulse before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-3xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-3xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px]"> </div>
        <h2 className="text-2xl font-light text-gray-500 w-4/6 mt-8 ">
          Empowering you to embrace <span className="text-emerald-600 brightness-110">eco-friendly</span> transportation options and transform your daily commute.
        </h2>
        <div className="OPTIONS flex gap-5 mt-11 text-neutral-950">
        
        <Link href={'/'} >
          <button className="flex gap-2 bg-white hover:bg-neutral-200 transition-colors duration-75 ease-in px-4 py-2 rounded-md active:scale-95">
            <div>Check Savings</div>
            <div>$</div>
          </button>
        </Link>
        
       
        <Link href={'/view-map'}>
          <button className="flex gap-2 bg-white hover:bg-neutral-200 transition-colors duration-75 ease-in px-4 py-2 rounded-md active:scale-95">
            <div>Plan a route</div>
            <Image src={'/icons/route-icon.svg'} alt="route icon" width={20} height={20}/>
          </button>
        </Link>
        </div>

        </div>
      </section>
      <Footer />
    </main>
  )
}
