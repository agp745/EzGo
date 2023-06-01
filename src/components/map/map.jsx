'use client'

import { useMemo, useState, useEffect } from "react"
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api"
import { useSelector } from "react-redux"

function Map( {center} ) {

    console.log(center)

    return (
    <GoogleMap
        zoom={10}
        center={center}
        mapContainerClassName="w-full h-screen"
    >
        <Marker position={center} />
    </GoogleMap>
    )
}

export function DisplayMap() {

    const { coordinates, isLoading } = useSelector((state) => state.location)

    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
        libraries: ["places"]
    })

    useEffect(() => {
        if(loadError) {
            console.error(loadError, 'FAILED TO LOAD GOOGLE MAPS API')
        }
    }, [loadError])

    if (loadError) return <div>Failed to load Google Maps API</div>
    if (isLoading) return <div>Loading...</div>
    return <Map center={coordinates} />
}

