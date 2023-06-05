

'use client'

import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    start: {
        lat: 0,
        lng: 0,
        geocode: null
    },
    end: {
        lat: 0,
        lng: 0,
        geocode: null
    },
    loadRoute: false,
    travelMode: 'DRIVING'
}

const routeSlice = createSlice({
    name: 'route',
    initialState,
    reducers: {
        setStart: (state, action) => {
            state.start = action.payload
        },
        setEnd: (state, action) => {
            state.end = action.payload
        },
        loadRoute: (state) => {
            state.loadRoute = true
        },
        setTravelMode: (state, action) => {
            state.travelMode = action.payload
        }
    }
})

export const { setStart, setEnd, loadRoute, setTravelMode } = routeSlice.actions

export default routeSlice.reducer