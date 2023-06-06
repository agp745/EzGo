'use client'

import { useSelector } from "react-redux"
import { useEffect, useState } from "react"
import { ArrowRightIcon, TrashIcon } from '@heroicons/react/24/outline'
import axios from "axios"

function NoRoutes() {
    return (
        <div>
            no routes
        </div>
    )
}

export default function SavedRoutes() {

    const { userId } = useSelector((state) => state.user)
    const [routes, setRoutes] = useState(null)

    useEffect(() => {
        axios(`/api/user/saved-routes?user_id=${userId}`)
        .then(res => setRoutes(res.data.routes))
    }, [])

    const deleteRoute = () => {
        
    }

    return (
        <main className="flex flex-col justify-center items-center gap-5 w-full h-screen">
            <h1 className="text-2xl font-semibold">Saved Routes</h1>
            {routes ? routes.map((route => {
                return (
                    <div 
                        key={route.id}
                        className="flex justify-center items-center gap-5 text-md w-full"
                    >
                        <div className="flex justify-end items-center gap-2 w-2/3 self-center text-right">
                            <button onClick={deleteRoute}>
                                <TrashIcon className="text-red-600 w-5 h-5"/>
                            </button>
                            <div>{route.route.start.geocode}</div>
                        </div>
                        <ArrowRightIcon className="w-7 h-7" />
                        <div className="w-2/3 self-center">{route.route.end.geocode}</div>
                    </div>
                )
            })): <NoRoutes />}
        </main>
    )
}