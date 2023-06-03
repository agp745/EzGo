'use client'

import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    isLoggedIn: false
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setStatus: (state, action) => {
            state.isLoggedIn = action.payload
        }
    }
})

export const { setStatus } = userSlice.actions
export default userSlice.reducer