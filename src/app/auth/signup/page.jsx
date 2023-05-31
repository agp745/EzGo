'use client'

import { GoogleButton } from "@/src/components/googleButton"
import { useState, useEffect } from "react"
import Link from "next/link"
import { signIn } from "next-auth/react"

function HomeButton() {
    return (
        <div className="fixed top-0 left-0 ml-2 mt-2 text-sm">
            <Link href={'/'}>
                <button className="bg-neutral-800 hover:bg-neutral-900 transition-colors duration-150 ease-in border border-solid border-neutral-400 rounded-md px-4 py-2 text-neutral-400 font-light active:scale-95">
                    <div>{'<-'} home</div>
                </button>
            </Link>
        </div>
    )
}

function TextForm() {
    const [email, setEmail] = useState('')

    const [isDisabled, setIsDisabled] = useState(true)

    useEffect(() => {
        if ( email.length > 0) {
            setIsDisabled(false)
        } else {
            setIsDisabled(true)
        }
    }, [email])

    return (
        <form action="" className="flex flex-col justify-center items-start mt-5">
            <label htmlFor="email" className="text-neutral-500 text-sm mb-2">Email</label>
            <input 
                id="email"
                type="email" 
                name="email" 
                placeholder="example@dev.com"
                value={email} 
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-neutral-900 border-[0.5px] focus:outline focus:outline-neutral-500 focus:outline-2 border-neutral-500 transition-all duration-100 ease-in px-3 py-2 rounded-md text-neutral-400 placeholder-neutral-500 text-sm"
            />
            {isDisabled ? (
                <button 
                    className="DISABLED mt-8 bg-white brightness-75 transition-all duration-100 ease-in rounded-md py-2 px-3 w-full text-sm text-black font-semibold hover:cursor-not-allowed"
                    disabled
                >
                    Create Account
                </button>
            ) : (
                <button 
                    onClick={() => signIn("email", email)}
                    className="mt-8 bg-white transition-all duration-100 ease-in rounded-md py-2 px-3 w-full text-sm text-black font-semibold"
                >
                    Create Account
                </button>
            )}
        </form>
    )
}

export default function SignUp() {

    return (
        <main className="w-full h-full flex items-center justify-center mt-40">
            <section className="CONTAINER w-[30rem] h-full">
                <HomeButton />
                <div className="flex flex-col items-start w-full mb-12">
                    <h1 className="text-xl font-semibold">Create an EzGo account</h1>
                    <div className="text-md font-light text-neutral-400 mt-2">Already have an account?&nbsp;
                        <Link 
                            href='/auth/login'
                            className="text-blue-500 hover:brightness-125 transition-all duration-100 ease-in"
                        >
                            Log in.
                        </Link>
                    </div>
                </div>
                <TextForm />
                <div className="flex items-center justify-center gap-2 before:block before:w-[47%] before:h-px before:bg-white after:block after:w-[47%] after:h-px after:bg-white my-7">
                    or
                </div>
                <GoogleButton action={'Sign up'} />
            </section>
        </main>
    )
}