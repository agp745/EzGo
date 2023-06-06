import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { setStart, setEnd } from "@/src/lib/reduxStore/slices/routeSlice"
import { PlacesAutocomplete } from "../placesAutocomplete"
import { HomeIcon, SewingPinFilledIcon, DotFilledIcon, DotsVerticalIcon, Cross2Icon } from '@radix-ui/react-icons'
import { GenerateRouteButton, SaveRouteButton, GetSavedRoutesButton } from "../routeButtons"
import { TransportationChoice } from "../transportation"



export function Sidebar({ width, session, route, logo, logoWidth, logoHeight }) {

    const [inputs, setInputs] = useState(1)
    const [isHovered, setIsHovered] = useState(false)
    const { start, end } = useSelector((state) => state.route)
    const dispatch = useDispatch()

    useEffect(() => {
        if(start.lat && end.lat) {
            setInputs(3)
        } 
    }, [start, end])

    const clearSearch = () => {
        const nullRoute = {
            lat: null,
            lng: null,
            geocode: null
        }
        setInputs(1)
        dispatch(setStart(nullRoute))
        dispatch(setEnd(nullRoute))
    }

    return (
        <div className="min-h-screen bg-gray-100 ">
            <div 
                className={`sidebar min-h-screen ${width} overflow-hidden border-r hover:bg-white hover:shadow-lg transition-all duration-500`}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <div className="flex h-screen flex-col justify-between pt-2 pb-6">
                    <div>
                        <Link href={'/'}>
                            <div className="w-max p-2.5">
                                <Image src={logo} alt="EzGo Logo" width={logoWidth} height={logoHeight} />
                            </div>
                        </Link>
                        {route === '/view-map' && isHovered && 
                        <ul className={`mt-6 space-y-2 flex flex-col items-center gap-1 ${isHovered ? 'SHOW-SIDEBAR' : 'HIDE-SIDEBAR'}`}>
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
                            <button
                                className="flex items-center gap-1 text-black text-sm font-light bg-white hover:brightness-[.98] border rounded drop-shadow-sm px-2 py-1 transition-all duration-75 ease-in active:scale-95"
                                onClick={clearSearch}
                            >
                                <Cross2Icon className="text-red-600" width={20} height={20} />
                                <div>clear</div>
                            </button>
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
                        }
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