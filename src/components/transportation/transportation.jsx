

import { setTravelMode } from "@/src/lib/reduxStore/slices/routeSlice";
import { useDispatch, useSelector } from "react-redux";
import React from 'react';
import * as RadioGroup from '@radix-ui/react-radio-group';
export function TransportationChoice() {

  const travelMode = useSelector((state) => state.route.travelMode)
    
    const dispatch = useDispatch()

    const handleButton = (value) => {
      dispatch(setTravelMode(value))
    }
    
    return (
        <form>
        <RadioGroup.Root
          className="flex flex-col gap-2.5"
          value={travelMode}
          aria-label="View density"
          onValueChange={handleButton}
        >
          <div className="flex items-center">
            <RadioGroup.Item
              className="bg-white w-[25px] h-[25px] rounded-full shadow-[0_2px_10px] shadow-blackA7 hover:bg-violet3 focus:shadow-[0_0_0_2px] focus:shadow-black outline-none cursor-default"
              value="BICYCLING"
              id="r1"
            >
              <RadioGroup.Indicator className="flex items-center justify-center w-full h-full relative after:content-[''] after:block after:w-[11px] after:h-[11px] after:rounded-[50%] after:bg-violet11" />
            </RadioGroup.Item>
            <label className="text-black text-[15px] leading-none pl-[15px]" htmlFor="r1">
              Bicycling
            </label>
          </div>
          <div className="flex items-center">
            <RadioGroup.Item
              className="bg-white w-[25px] h-[25px] rounded-full shadow-[0_2px_10px] shadow-blackA7 hover:bg-violet3 focus:shadow-[0_0_0_2px] focus:shadow-black outline-none cursor-default"
              value="WALKING"
              id="r2"
            >
              <RadioGroup.Indicator className="flex items-center justify-center w-full h-full relative after:content-[''] after:block after:w-[11px] after:h-[11px] after:rounded-[50%] after:bg-violet11" />
            </RadioGroup.Item>
            <label className="text-black text-[15px] leading-none pl-[15px]" htmlFor="r2">
              Walking
            </label>
          </div>
          <div className="flex items-center">
            <RadioGroup.Item
              className="bg-white w-[25px] h-[25px] rounded-full shadow-[0_2px_10px] shadow-blackA7 hover:bg-violet3 focus:shadow-[0_0_0_2px] focus:shadow-black outline-none cursor-default"
              value="TRANSIT"
              id="r3"
            >
              <RadioGroup.Indicator className="flex items-center justify-center w-full h-full relative after:content-[''] after:block after:w-[11px] after:h-[11px] after:rounded-[50%] after:bg-violet11" />
            </RadioGroup.Item>
            <label className="text-black text-[15px] leading-none pl-[15px]" htmlFor="r3">
              Transit
            </label>
          </div>
          <div className="flex items-center">
            <RadioGroup.Item
              className="bg-white w-[25px] h-[25px] rounded-full shadow-[0_2px_10px] shadow-blackA7 hover:bg-violet3 focus:shadow-[0_0_0_2px] focus:shadow-black outline-none cursor-default"
              value="DRIVING"
              id="r3"
            >
              <RadioGroup.Indicator className="flex items-center justify-center w-full h-full relative after:content-[''] after:block after:w-[11px] after:h-[11px] after:rounded-[50%] after:bg-violet11" />
            </RadioGroup.Item>
            <label className="text-black text-[15px] leading-none pl-[15px]" htmlFor="r3">
              Driving
            </label>
          </div>
        </RadioGroup.Root>
      </form>
    )
}

