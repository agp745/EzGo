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
          <button className="flex gap-2 bg-white px-4 py-2 rounded-md">
            <Link href={'/'}>Check Savings</Link>
            <div>$</div>
          </button>
          <button className="flex gap-2 bg-white px-4 py-2 rounded-md">
            <Link href={'/'}>Plan a route</Link>
            <Image src={'/icons/route-icon.svg'} alt="route icon" width={20} height={20}/>
          </button>
        </div>
      </section>
      <Footer />
    </main>
  )
}
