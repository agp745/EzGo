'use client'

import { useMemo, useState, useEffect } from "react"
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api"
import { useSelector } from "react-redux"

function Map({ userLocation }) {

    const test = {
        lat: 44,
        lng: -80,
    }

    return (
    <GoogleMap
        zoom={14}
        center={userLocation}
        mapContainerClassName="w-full h-screen"
    >
        <Marker position={userLocation} />
    </GoogleMap>
    )
}

const libraries = ['places']

export function DisplayMap() {

    const { coordinates, isLoading } = useSelector((state) => state.location)

    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
        libraries
    })

    useEffect(() => {
        if(loadError) {
            console.error(loadError, 'FAILED TO LOAD GOOGLE MAPS API')
        }
    }, [loadError])

    if (loadError) return <div>Failed to load Google Maps API</div>
    if (isLoaded && !isLoading) return <Map userLocation={coordinates} />
    return <div>Loading...</div>
}

