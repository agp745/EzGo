import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { PlacesAutocomplete } from "../map"
import { HomeIcon } from '@radix-ui/react-icons'

export function Sidebar({width}) {

    const [isType, setIsType] = useState(false)
    const [sideLogo, setSideLogo] = useState(false)

    return (
        <div className="min-h-screen bg-gray-100 ">
            <div className={`sidebar min-h-screen ${width} overflow-hidden border-r hover:bg-white hover:shadow-lg transition-all duration-500`}>
                <div className="flex h-screen flex-col justify-between pt-2 pb-6">
                    <div>
                        <Link href={'/'}>
                            <div className="w-max p-2.5">
                                <Image src={'/icons/logo-only.png'} alt="EzGo Logo" width={24} height={24} />
                            </div>
                        </Link>
                        <ul className="mt-6 space-y-2 tracking-wide">
                            <form action="" className="relative w-auto mx-auto">
                                <PlacesAutocomplete setIsType={setIsType} placeholder={"enter start location"} priority={true}
                                    className="peer cursor-pointer relative z-10 h-12 w-12 rounded-full border bg-transparent pl-12 outline-none focus:w-full focus:cursor-text focus:border-cyan-300 focus:pl-16 focus:pr-4 text-slate-950 text-sm"
                                />
                                <svg xmlns="http://www.w3.org/2000/svg" className="absolute inset-y-0 my-auto h-8 w-12 border-r border-transparent stroke-gray-500 px-3.5 peer-focus:border-cyan-300-300 peer-focus:stroke-cyan-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                            </form>
                            {isType && <form action="" className="relative w-auto mx-auto">
                                <PlacesAutocomplete setIsType={setIsType} placeholder={"enter end location"} priority={false}
                                    className="peer cursor-pointer relative z-10 h-12 w-12 rounded-full border bg-transparent pl-12 outline-none focus:w-full focus:cursor-text focus:border-cyan-300 focus:pl-16 focus:pr-4 text-slate-950 text-sm"
                                />
                                <svg xmlns="http://www.w3.org/2000/svg" className="absolute inset-y-0 my-auto h-8 w-12 border-r border-transparent stroke-gray-500 px-3.5 peer-focus:border-cyan-300-300 peer-focus:stroke-cyan-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                            </form>}
                            <li className="min-w-max">
                                <a href="#" className="bg group flex items-center space-x-4 rounded-full px-4 py-3 text-gray-600">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path className="fill-current text-gray-300 group-hover:text-cyan-300" fillRule="evenodd" d="M2 6a2 2 0 012-2h4l2 2h4a2 2 0 012 2v1H8a3 3 0 00-3 3v1.5a1.5 1.5 0 01-3 0V6z" clipRule="evenodd" />
                                        <path className="fill-current text-gray-600 group-hover:text-cyan-600" d="M6 12a2 2 0 012-2h8a2 2 0 012 2v2a2 2 0 01-2 2H2h2a2 2 0 002-2v-2z" />
                                    </svg>
                                    <span className="group-hover:text-gray-700">EzRouting</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="w-max -mb-3">
                        <a href="/" className="group flex items-center space-x-4 rounded-md px-4 py-3 text-gray-600">
                            <HomeIcon width={20} height={20} />
                            <span className="group-hover:text-gray-700">Home</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
} 