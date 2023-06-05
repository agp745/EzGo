import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { PlacesAutocomplete } from "../placesAutocomplete"
import { HomeIcon, SewingPinFilledIcon, DotFilledIcon, DotsVerticalIcon } from '@radix-ui/react-icons'
import { GenerateRouteButton, SaveRouteButton, GetSavedRoutesButton } from "../routeButtons"
import { TransportationChoice } from "../transportation"



export function Sidebar({ width, session, route }) {

    const [inputs, setInputs] = useState(1)
    const [isOpen, setIsOpen] = useState(false) 
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
                        <ul className="mt-6 space-y-2 tracking-wide flex flex-col items-center gap-1">
                            <form action="" className="relative w-auto mx-auto flex">
                                <DotFilledIcon color="blue" width={24} height={24} />
                                <PlacesAutocomplete setInputs={setInputs} inputs={inputs} position={'start'}/>
                            </form>
                            {inputs > 1 && 
                                <>
                                <DotsVerticalIcon color="black" width={24} height={24} />
                                <form action="" className="relative w-auto mx-auto flex">
                                    <SewingPinFilledIcon color="red" width={24} height={24} />
                                    <PlacesAutocomplete setInputs={setInputs} inputs={inputs} position={'end'}/>
                                </form>
                                </>
                            }
                            {inputs > 2 && 
                                <>
                                <TransportationChoice />
                                <GenerateRouteButton />
                                </>
                            }
                            <li className="">
                                {session ? (<GetSavedRoutesButton />) : 
                                    (<div className="flex flex-col items-center px-4 py-3 text-gray-600 hover:text-slate-700 transition-colors duration-75 ease-in mt-16">
                                        <div>
                                            <Link href={`/auth/login?callbackUrl=${route}`} className="text-sm underline underline-offset-1 hover:underline-offset-2 transition-all duration-75 ease-in">Log in</Link>
                                            <span className="text-sm font-light"> or </span>
                                            <Link href={`/auth/signup?callbackUrl=${route}`} className="text-green-600 hover:brightness-110 underline underline-offset-1 hover:underline-offset-2 transition-all duration-75 ease-in">Sign up</Link>
                                        </div>
                                        <div className="font-light">to save your routes</div>
                                    </div>) 
                                }
                            </li>
                        </ul>
                    </div>
                    <div className="w-max -mb-3">
                        {session && <SaveRouteButton />}
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