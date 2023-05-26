'use client'

import { GoogleButton } from "@/src/components/googleButton"
import { useState, useEffect } from "react"
import Link from "next/link"

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
    const [credentails, setCredentials] = useState({
        email: '',
        password: ''
    })

    const [isDisabled, setIsDisabled] = useState(true)

    useEffect(() => {
        if ( credentails.email.length > 0) {
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
        alert(`${credentails.email}`)
    }

    return (
        <form action="" className="flex flex-col justify-center items-start mt-5">
            <label htmlFor="email" className="text-neutral-500 text-sm mb-2">Email</label>
            <input 
                id="email"
                type="email" 
                name="email" 
                placeholder="example@email.com" 
                value={credentails.email} 
                onChange={handleInput}
                className="w-full bg-neutral-900 border-[0.5px] focus:outline focus:outline-neutral-500 focus:outline-2 border-neutral-500 transition-all duration-100 ease-in px-3 py-2 rounded-md text-neutral-400 placeholder-neutral-500 text-sm"
            />
            {isDisabled ? (
                <button 
                    onClick={handleClick}
                    className="DISABLED mt-8 bg-white brightness-75 transition-all duration-100 ease-in rounded-md py-2 px-3 w-full text-sm text-black font-semibold hover:cursor-not-allowed"
                    disabled
                >
                    continue {'->'}
                </button>
            ) : (
                <button 
                    onClick={handleClick}
                    className="mt-8 bg-white transition-all duration-100 ease-in rounded-md py-2 px-3 w-full text-sm text-black font-semibold"
                >
                    continue {'->'}
                </button>
            )}
        </form>
    )
}

export default function Login() {

    return (
        <main className="w-full h-full flex items-center justify-center mt-40">
            <section className="CONTAINER w-[30rem] h-full">
                <HomeButton />
                <div className="flex flex-col items-start w-full mb-12">
                    <h1 className="text-xl font-semibold">Log in to EzGo</h1>
                    <div className="text-md font-light text-neutral-400 mt-2">Don't have an account?&nbsp;
                        <Link 
                            href='/auth/signup' 
                            className="text-blue-500 hover:brightness-125 transition-all duration-100 ease-in"
                        >
                            Sign Up.
                        </Link>
                    </div>
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