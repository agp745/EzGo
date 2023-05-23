import Link from "next/link"
import { Header } from "../components/header"
import { Footer } from "../components/footer"

export default function Home() {
  return (
    <main>
      <Header/>
      <section className="flex flex-col items-center gap-1 mt-20">
        <h1 className="text-7xl font-bold">App Tagline</h1>
        <h2 className="text-2xl font-light text-gray-500">sub-description</h2>
        <div className="OPTIONS flex justify-center gap-5">
          <div><Link href={'/'}>Check Savings</Link></div>
          <div><Link href={'/'}>Find Route</Link></div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
