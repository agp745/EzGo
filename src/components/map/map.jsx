'use client'

import { useState, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { setStatus } from "@/src/lib/reduxStore/slices/userSlice"
import { useSession } from "next-auth/react"
import { GoogleMap, useLoadScript, Marker, LoadScriptNext, DirectionsRenderer, DirectionsService } from "@react-google-maps/api"
import { Sidebar } from "../sidebar"

function Map({ userLocation }) {

    const { start, end, loadRoute } = useSelector((state) => state.route)
    const [response, setResponse] = useState(null)

    const DirectionsServiceCallback = (response) => {
        if (response !== null) {
            if (response.status === 'OK') {
                setResponse(response)
            } else {
                console.log('response: ', response)
            }
        }
    }

    return (
    <GoogleMap
        zoom={14}
        center={userLocation}
        mapContainerClassName="w-full h-screen"
    >
        <Marker position={userLocation} />

        {loadRoute &&
            <>
            <DirectionsService
                options={{
                    origin: `${start.lat},${start.lng}`,
                    destination: `${end.lat},${end.lng}`,
                    travelMode: 'DRIVING'
                }}
                callback={DirectionsServiceCallback}
                onLoad={(direcrtionsService) => console.log('Directions Service Loaded', direcrtionsService)}
                onUnmount={(direcrtionsService) => console.log('Directions Service Unmounted', direcrtionsService)}
                />

            <DirectionsRenderer
                directions={response}
                onLoad={(directionsRenderer) => console.log('DirectionsRenderer loaded', directionsRenderer)}
                onUnmount={(directionsRenderer) => console.log('DirectionsRenderer unmounted', directionsRenderer)}
                />
            </>
        }


    </GoogleMap>
    )
}

const libraries = ['places']

export function DisplayMap({ expandedSidebar, route }) {

    const { coordinates, isLoading } = useSelector((state) => state.location)
    const { isLoggedIn } = useSelector((state) => state.user)
    const dispatch = useDispatch()
    const { data: session } = useSession()

    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
        libraries,
    })

    useEffect(() => {
        if(loadError) {
            console.error(loadError, 'FAILED TO LOAD GOOGLE MAPS API')
        }
    }, [loadError])

    useEffect(() => {
        if(session) {
            dispatch(setStatus(true))
        } else {
            dispatch(setStatus(false))
        }
    }, [session])

    if (loadError) return <div>Failed to load Google Maps API</div>
    if (isLoaded && !isLoading) return (
        <>
            {expandedSidebar ? (
                <>
                    <Sidebar width={'w-56'} session={isLoggedIn} route={route} />
                    <Map userLocation={coordinates} />
                </>
            ) : (
                <>
                    <Sidebar width={'w-[3.35rem] hover:w-56'} session={isLoggedIn} route={route}/>
                    <Map userLocation={coordinates} />
                </>
            )}
        </>
    )
    return <div>Loading...</div>
}

