'use client';

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// export const fetchUserCoordinates = createAsyncThunk('location/fetchUserCoordinates', async () => {
//     const response = await axios.get(`https://api.ipgeolocation.io/ipgeo?apiKey=${process.env.NEXT_PUBLIC_IP_GEOLOCATION_API_KEY}`)
//     console.log(response)
// })

const locationSlice = createSlice({
    name: 'location',
    initialState: {
        isLoading: false,
        coordinates: {
            lat: 44,
            lng: -80,
        },
        error: null
    },
    reducers: {
        setCoordinates: (state, action) => {
            state.coordinates = action.payload
            state.isLoading = false
        },
        startLoading: (state) => {
            state.isLoading = true
        }
    },
})

export const { setCoordinates, startLoading } = locationSlice.actions

export default locationSlice.reducer