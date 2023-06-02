import axios from "axios";

const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY

export const getRoute = async (startLat, startLng, endLat,endLng) => {
    const response = await axios(`https://maps.googleapis.com/maps/api/directions/json?destination=${endLat},${endLng}&origin=${startLat},${startLng}&key=${apiKey}`)
    return response
}