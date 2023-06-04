'use client';

import { createSlice } from "@reduxjs/toolkit";

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