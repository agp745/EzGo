'use client'

import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    isLoggedIn: false,
    userId: null,
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setStatus: (state, action) => {
            state.isLoggedIn = action.payload
        },
        setUserId: (state, action) => {
            state.userId = action.payload
        }
    }
})

export const { setStatus } = userSlice.actions
export default userSlice.reducer