import Link from "next/link"

export const Header = () => {

    const github = '/icons/github-icon.svg'

    return (
        <section className="flex justify-between p-8">
            <div className="LEFT">
                <h1 className="text-3xl font-semibold">EZGO</h1>
            </div>
            <div className="RIGHT flex gap-4 text-sm font-semibold">
                <button 
                   className="bg-neutral-800 hover:bg-neutral-900 transition-colors duration-150 ease-in border border-solid border-neutral-400 rounded-md px-4 py-2 text-neutral-400 active:scale-95">
                    <Link href={'/'}>login {'->'}</Link>
                </button>
                <button 
                   className="card bg-white hover:bg-gray-200 after:blur-md after:animate-pulse border-1 transition-colors duration-150 ease-in text-neutral-950 rounded-md px-4 py-2 after:hover:animate-none">
                    <Link href={'/'}>sign up</Link>
                </button>
            </div>
        </section>
    )
}