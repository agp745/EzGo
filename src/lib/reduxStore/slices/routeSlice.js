'use client'

import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    start: {
        lat: 0,
        lng: 0,
    },
    end: {
        lat: 0,
        lng: 0
    },
    loadRoute: false
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
        }
    }
})

export const { setStart, setEnd, loadRoute } = routeSlice.actions

export default routeSlice.reducer