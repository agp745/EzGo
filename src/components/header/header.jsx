'use client'

import Link from "next/link"
import { useSession, signOut } from "next-auth/react"
import { useEffect } from "react"
import { UserAvatar } from "../avatar"
import axios from "axios"

const SignedOut = () => {
    return (
        <div className="RIGHT flex gap-4 text-sm">
            <Link href={'/auth/login?callbackUrl=/'}>
                <button 
                    className="bg-neutral-800 hover:bg-neutral-900 transition-colors duration-150 ease-in border border-solid border-neutral-400 rounded-md px-4 py-2 text-neutral-400 font-light active:scale-95"
                >
                   <div>login {'->'}</div>
                </button>
            </Link>
            <Link href={'/auth/signup?callbackUrl=/'}>
                <button 
                    className="card bg-white hover:bg-gray-200 after:blur-md after:animate-pulse border-1 transition-colors duration-150 ease-in text-neutral-950 font-semibold rounded-md px-4 py-2 after:hover:animate-none"
                >
                    <div>sign up</div>
                </button>
            </Link>
        </div>
    )
}

const SignedIn = ({ session }) => {
    return (
        <div className="RIGHT flex gap-4 text-sm">
            <UserAvatar session={session}/>
        </div>
    )
}

export const Header = () => {

    const { data: session } = useSession()

    // useEffect(() => {
    //     console.log(session)
        
    // }, [session])

    const github = '/icons/github-icon.svg'

    return (
        <section className="flex justify-between p-8">
            <div className="LEFT">
                <h1 className="text-3xl font-semibold">EZGO</h1>
            </div>
            {session ? <SignedIn session={session} /> : <SignedOut />}
        </section>
    )
}