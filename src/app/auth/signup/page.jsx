'use client'

import { GoogleButton } from "@/src/components/googleButton"
import { useState, useEffect } from "react"
import Link from "next/link"

function HomeButton() {
    return (
        <div className="fixed top-0 left-0 ml-2 mt-2 text-sm">
            <button 
                className="bg-neutral-800 hover:bg-neutral-900 transition-colors duration-150 ease-in border border-solid border-neutral-400 rounded-md px-4 py-2 text-neutral-400 font-light active:scale-95"
            >
                <Link href={'/'}>{'<-'} home</Link>
            </button>
        </div>
    )
}

function TextForm() {
    const [credentails, setCredentials] = useState({
        email: '',
        password: ''
    })

    const [isDisabled, setIsDisabled] = useState(true)

    useEffect(() => {
        if ( credentails.email.length > 0 && credentails.password.length > 0) {
            setIsDisabled(false)
        } else {
            setIsDisabled(true)
        }
    }, [credentails])

    const handleInput = (e) => {
        const { name, value } = e.target
        setCredentials({
            ...credentails,
            [name]: value
        })
    }

    const handleClick = () => {
        alert(`${credentails.email}, ${credentails.password}`)
    }

    return (
        <form action="" className="flex flex-col justify-center items-start mt-5">
            <label htmlFor="email" className="text-gray-500 text-sm">Email</label>
            <input 
                id="email"
                type="email" 
                name="email" 
                placeholder="example@email.com" 
                value={credentails.email} 
                onChange={handleInput}
                className="w-full px-3 py-2 rounded-md text-black text-sm"
            />
            <label htmlFor="password" className="text-gray-500 text-sm">Password</label>
            <input 
                id="password"
                type="password" 
                name="password" 
                placeholder="•••••••••••••••" 
                value={credentails.password} 
                onChange={handleInput}
                className="w-full px-3 py-2 rounded-md text-black text-sm"
            />
            {isDisabled ? (
                <button 
                    onClick={handleClick}
                    className="DISABLED mt-4 bg-white brightness-75 transition-all duration-100 ease-in rounded-md py-2 px-3 w-full text-sm text-black font-semibold hover:cursor-not-allowed"
                    disabled
                >
                    Create Account
                </button>
            ) : (
                <button 
                    onClick={handleClick}
                    className="mt-4 bg-white transition-all duration-100 ease-in rounded-md py-2 px-3 w-full text-sm text-black font-semibold"
                >
                    Create Account
                </button>
            )}
        </form>
    )
}

export default function SignIn() {

    return (
        <main className="w-full h-full flex items-center justify-center mt-40">
            <section className="CONTAINER w-[30rem] h-full">
                <HomeButton />
                <div className="flex flex-col items-start w-full">
                    <h1 className="text-xl font-semibold">Create an EzGo account</h1>
                    <div className="text-md font-light text-neutral-400">Already have an account? <span className="text-blue-500">Log in.</span></div>
                </div>
                <TextForm />
                <div className="flex items-center justify-center gap-2 before:block before:w-[47%] before:h-px before:bg-white after:block after:w-[47%] after:h-px after:bg-white my-7">
                    or
                </div>
                <GoogleButton />
            </section>
        </main>
    )
}