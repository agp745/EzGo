'use client';

import Link from "next/link"
import Image from "next/image"
import { setCoordinates, startLoading } from "@/src/lib/reduxStore/slices/locationSlice";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { geolocator } from "@/src/lib/utils/geolocator";

export const MenuButtons = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(startLoading())
        geolocator()
        .then((location) => {
            dispatch(setCoordinates(location))
            console.log(location)
        })
        .catch((error) => console.log(error))
    }, [])

    const buttonStyles = 'flex gap-2 bg-white hover:bg-neutral-200 transition-colors duration-75 ease-in px-4 py-2 rounded-md active:scale-95'
    const disabledButtonStyles = 'DISABLED cursor-not-allowed flex gap-2 bg-white hover:bg-neutral-200 transition-colors duration-75 ease-in px-4 py-2 rounded-md active:scale-95'

    
    return (
        <div className="flex gap-5 mt-11 text-neutral-950">
            <Link href={'/'} >
                <button className={buttonStyles}>
                    <div>Check Savings</div>
                    <div>$</div>
                </button>
            </Link>
          
         
            <Link href={'/view-map'}>
                <button 
                    className={buttonStyles}
                    // onClick={handleCLick}
                >
                    <div>Plan a route</div>
                    <Image src={'/icons/route-icon.svg'} alt="route icon" width={20} height={20}/>
                </button>
            </Link>
        </div>
    )
  }