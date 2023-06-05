'use client'

import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { loadRoute } from "../../lib/reduxStore/slices/routeSlice"
import { PaperPlaneIcon, DownloadIcon, CheckIcon } from '@radix-ui/react-icons'
import { FolderOpenIcon, ArrowRightIcon } from '@heroicons/react/24/outline'
import { FolderIcon } from '@heroicons/react/24/solid'
import axios from 'axios'

export const GenerateRouteButton = () => {

    const dispatch = useDispatch()

    return (
        <button 
            className="flex gap-2 text-black text-sm drop-shadow-2xl rounded px-2 py-1 items-center bg-[#FFFFFF]"
            onClick={() => dispatch(loadRoute())}
        >
            <div className="font-semibold">generate route</div>
            <PaperPlaneIcon />
        </button>
    )
}

export const SaveRouteButton = () => {
    
    const { userId } = useSelector((state) => state.user)
    const { start, end } = useSelector((state) => state.route)
    const [status, setStatus] = useState(null)

    const saveRoute = async() => {
        const response = await axios.post('/api/user/saved-routes', {
            userId,
            route: {
                start,
                end,
            }
        })
        setStatus(response.statusText)
        console.log(response)
    }

    return (
        <button 
            className="flex items-center space-x-4 rounded-md px-4 py-3 text-gray-600"
            onClick={saveRoute}
        >
            {status === 'OK' ? <CheckIcon width={20} height={20} className='text-green-500' /> : <DownloadIcon width={20} height={20} />}
            <span className="group-hover:text-gray-700">Save Route</span>
        </button>
    )
}

export const GetSavedRoutesButton = () => {

    const [isOpen, setIsOpen] = useState(false)
    const [routes, setRoutes] = useState(null)
    const { userId } = useSelector((state) => state.user)

    const handleClick = async () => {
        setIsOpen(!isOpen)
        await axios(`/api/user/saved-routes?user_id=${userId}`)
        .then(res => setRoutes(res.data.routes))
        // .then(res => console.log(res.data.routes))
    }

    return (
        <>
        <button 
            className="bg group flex items-center space-x-4 rounded-full px-4 py-3 text-gray-600 hover:text-slate-700 transition-colors duration-75 ease-in"
            onClick={handleClick}    
            >
            {isOpen ? <FolderOpenIcon className="w-5 h-5" /> : <FolderIcon className="w-5 h-5" /> }
            <span className="group-hover:text-gray-700">Saved Routes</span>
        </button>

        {isOpen && routes && 
            <section className='flex flex-col items-center'>
                {routes.map((route) => {
                    return (
                        <div 
                        key={route.id}
                        className='flex flex-col items-center w-full text-neutral-900 text-sm border-b border-b-gray-200 py-2'
                        >
                            <div className='self-start'>{route.route.start.geocode}</div>
                            <ArrowRightIcon className='w-4 h-4'/>
                            <div className='self-end'>{route.route.end.geocode}</div>
                        </div>
                    )
                })}
            </section>
        }
        </>
    )
}