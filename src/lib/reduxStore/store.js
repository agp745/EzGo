'use client';

import { configureStore } from "@reduxjs/toolkit";
import locationReducer from "./slices/locationSlice";
import routeReducer from "./slices/routeSlice";


export const store = configureStore({
    reducer: {
        location: locationReducer,
        route: routeReducer,
    }
})
