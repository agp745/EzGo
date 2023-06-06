'use client';

import { configureStore } from "@reduxjs/toolkit";
import locationReducer from "./slices/locationSlice";
import routeReducer from "./slices/routeSlice";
import userReducer from "./slices/userSlice";


export const store = configureStore({
    reducer: {
        location: locationReducer,
        route: routeReducer,
        user: userReducer,
    }
})
