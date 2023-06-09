'use client'

import { useState, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { setStatus, setUserId } from "@/src/lib/reduxStore/slices/userSlice"
import { useSession } from "next-auth/react"
import { GoogleMap, useLoadScript, Marker, DirectionsRenderer, DirectionsService } from "@react-google-maps/api"
import { Sidebar } from "../sidebar"
import { Loading } from "../loading"
import { SavingsMenu } from "../savings"
import { PlanRoute } from "../plan-route"
import axios from "axios"

const libraries = ['places']
const version = 'weekly'

function Map({ userLocation, route }) {

    const { start, end, loadRoute, travelMode } = useSelector((state) => state.route)
    const [response, setResponse] = useState(null)
    const [count, setCount] = useState(0)
    const [routeData, setRouteData] = useState({
        distance: {},
        duration: {}
    })

    const directionsServiceCallback = (result) => {
        if (result !== null) {
            if (result.status === 'OK' && count < 2) {
                console.log(result)
                setCount(count + 1)
                setResponse(result)
                console.log('Distance:', result.routes[0].legs[0].distance.text);
                console.log('Duration:', result.routes[0].legs[0].duration.text);
                setRouteData({
                    distance: result.routes[0].legs[0].distance,
                    duration: result.routes[0].legs[0].duration
                })

            } else {
                console.log('result: ', result)
            }
        }
    }

    useEffect(() => {
        setCount(0)
    }, [start, end, travelMode])

    return (
    <GoogleMap
        zoom={14}
        center={userLocation}
        mapContainerClassName="w-full h-screen relative"
    >
        <Marker position={userLocation} />
        {loadRoute &&
            <>
            <DirectionsService
                options={{
                    origin: `${start.lat},${start.lng}`,
                    destination: `${end.lat},${end.lng}`,
                    travelMode: travelMode
                }}
                callback={(result) => directionsServiceCallback(result)}
                onLoad={(direcrtionsService) => console.log('Directions Service Loaded', direcrtionsService)}
                onUnmount={(direcrtionsService) => console.log('Directions Service Unmounted', direcrtionsService)}
                />

            <DirectionsRenderer
                directions={response}
                onLoad={(directionsRenderer) => console.log('DirectionsRenderer loaded', directionsRenderer)}
                onUnmount={(directionsRenderer) => console.log('DirectionsRenderer unmounted', directionsRenderer)}
            />
            {route === '/savings' && <SavingsMenu routeData={routeData} />}
            {route === '/view-map' && <PlanRoute routeData={routeData} />}
            </>
        }
    </GoogleMap>
    )
}

export function DisplayMap({ expandedSidebar, route }) {

    const { coordinates, isLoading } = useSelector((state) => state.location)
    const { isLoggedIn } = useSelector((state) => state.user)
    const { data: session } = useSession()
    const dispatch = useDispatch()

    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
        version,
        libraries
    })

    useEffect(() => {
        if(loadError) {
            console.error(loadError, 'FAILED TO LOAD GOOGLE MAPS API')
        }
    }, [loadError])

    const getUser = async(email) => {
        const response = await axios(`/api/user?email=${email}`)
        return response
    }

    useEffect(() => {
        if(session) {
            dispatch(setStatus(true))
            getUser(session.user.email)
            .then(res => dispatch(setUserId(res.data.user.id)))
        } else {
            dispatch(setStatus(false))
        }
    }, [session, dispatch])

    if (loadError) return <div>Failed to load Google Maps API</div>
    if (isLoaded && !isLoading) return (
        <>
            {expandedSidebar ? (
                <>
                    {/* //ADD VERSION WITH BLACK TEXT W/H = 125 */}
                    <Sidebar width={'w-56'} logo={'/icons/logo-only.png'} logoWidth={24} logoHeight={24} session={isLoggedIn} route={route} />
                    <Map userLocation={coordinates} route={route} />
                </>
            ) : (
                <>
                    {/* //HOVER STYLES = 'w-[3.35rem] hover:w-56 */}
                    <Sidebar width={'w-56'} logo={'/icons/logo-only.png'} logoWidth={24} logoHeight={24} session={isLoggedIn} route={route}/>
                    <Map userLocation={coordinates} route={route} />
                </>
            )}
        </>
    )
    return <Loading />
}

