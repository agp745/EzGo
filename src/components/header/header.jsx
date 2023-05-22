import Image from "next/image"
import Link from "next/link"

export const Header = () => {

    const github = '/icons/github-icon.svg'

    return (
        <section className="flex justify-between p-8">
            <div className="LEFT">
                <h1 className="text-xl font-medium">EZGO</h1>
            </div>
            <div className="RIGHT flex gap-6">
                <div className="bg-slate-600 border-2 border-solid border-red-400 rounded-md px-3 py-1">
                    <Link href={'/'}>login</Link>
                </div>
                <div className="bg-white hover:bg-gray-100 transition-colors duration-75 ease-in border-2 border-solid border-slate-300 text-slate-950 rounded-md px-3 py-1">
                    <Link href={'/'}>signup</Link>
                </div>
            </div>
        </section>
    )
}