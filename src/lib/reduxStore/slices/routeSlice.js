'use client'

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

export const fetchDirections = createAsyncThunk('route/fetchDirections', async (_, { getState }) =>{

    const state = getState()
    console.log(state.start, state.end)

    // const response = await axios('https://maps.googleapis.com/maps/api/directions/json?destination=29.7257252,-95.3444794&origin=29.8671293,-95.69325889999999&key=AIzaSyAWvlbOHLkMtD74EPEXbAGPm4WNCb7aR2I')
})

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