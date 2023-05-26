import Link from "next/link"
import Image from "next/image"
import { Header } from "../components/header"
import { Footer } from "../components/footer"

export default function Home() {

  const tagline = 'Unlock the power of sustainable and smarter commutes'
  const subTagline = 'Empowering you to embrace eco-friendly transportation options and transform your daily commute.'

  return (
    <main>
      <Header/>
      <section className="flex flex-col items-center gap-1 mt-20 text-center">
        <h1 className="text-gray-300 text-7xl font-bold">{tagline}</h1>
        <h2 className="text-2xl font-light text-gray-500 w-4/6 mt-8">{subTagline}</h2>
        <div className="OPTIONS flex justify-center gap-5 mt-8 text-neutral-950">
        <Link href={'/'}>
          <button className="flex gap-2 bg-white hover:bg-neutral-200 transition-colors duration-75 ease-in px-4 py-2 rounded-md active:scale-95">
            <div>Check Savings</div>
            <div>$</div>
          </button>
        </Link>
        <Link href={'/'}>
          <button className="flex gap-2 bg-white hover:bg-neutral-200 transition-colors duration-75 ease-in px-4 py-2 rounded-md active:scale-95">
            <div>Plan a route</div>
            <Image src={'/icons/route-icon.svg'} alt="route icon" width={20} height={20}/>
          </button>
        </Link>
        </div>
      </section>
      <Footer />
    </main>
  )
}
