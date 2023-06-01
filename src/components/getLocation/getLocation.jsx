'use client'

import { useEffect } from 'react';

export const GetLocation = () => {

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(({ coords }) => {
        const location = {
            lat: coords.latitude,
            lng: coords.longitude
        }
        localStorage.setItem("coordinates", JSON.stringify(location))
    }) 
  }, [])

  return <> </>
}

