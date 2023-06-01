'use client';

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { geolocator } from "../../utils/geolocator";

export const fetchCoordinates = createAsyncThunk('location/fetchCoordinates', async () => {
    const { location, error } = await geolocator()
    return { location, error }
})

const locationSlice = createSlice({
    name: 'location',
    initialState: {
        isLoading: false,
        coordinates: {
            lat: 0,
            lng: 0,
        },
        error: null
    },
    reducers: {
        setCoordinates: (state, action) => {
            state.coordinates = action.payload
        }
    }, extraReducers: {
        [fetchCoordinates.pending]: (state) => {
            state.isLoading = true
        },
        [fetchCoordinates.fulfilled]: (state, action) => {
            state.coordinates = action.payload.location
            state.isLoading = false
        },
        [fetchCoordinates.rejected]: (state, action) => {
            state.error = action.payload.error
            state.isLoading = false
        }
    }
})

export const { setCoordinates } = locationSlice.actions

export default locationSlice.reducer