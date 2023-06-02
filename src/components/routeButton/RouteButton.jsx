'use client'

import { useDispatch } from "react-redux"
import { loadRoute } from "../../lib/reduxStore/slices/routeSlice"
import { PaperPlaneIcon } from '@radix-ui/react-icons'

export const RouteButton = () => {

    const dispatch = useDispatch()

    return (
        <button 
            className="flex gap-2 text-black text-sm drop-shadow-2xl rounded px-2 py-1 items-center bg-[#FFFFFF]"
            onClick={() => dispatch(loadRoute())}
        >
            <div className="font-semibold">generate route</div>
            <PaperPlaneIcon />
        </button>
    )
}