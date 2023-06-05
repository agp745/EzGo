'use client'

import usePlacesAutocomplete, { getGeocode, getLatLng } from "use-places-autocomplete";
import useOnclickOutside from "react-cool-onclickoutside";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { setCoordinates } from "../../lib/reduxStore/slices/locationSlice";
import { setStart, setEnd } from "../../lib/reduxStore/slices/routeSlice";

export const PlacesAutocomplete = ({ setInputs, inputs, position }) => {

  let placeholderText
  if (position === 'start') {
    placeholderText = 'enter start location'
  } else if (position === 'end') {
    placeholderText = 'enter end location'
  } else {
    placeholderText = 'position prop missing'
  }

  const dispatch = useDispatch()
  const { start, end } = useSelector((state) => state.route)

  useEffect(() => {
    if (position === 'start') {
      setValue(start.geocode)
      clearSuggestions()
    } else if (position === 'end') {
      setValue(end.geocode)
      clearSuggestions()
    }
  }, [start, end])

  const {
    ready,
    value,
    suggestions: { status, data },
    setValue,
    clearSuggestions,
  } = usePlacesAutocomplete({
    requestOptions: {
      /* Define search scope here */
    },
    debounce: 300,
  });

  const ref = useOnclickOutside(() => {
    clearSuggestions();
  });
  
  const handleInput = (e) => {
    // Update the keyword of the input element
    setValue(e.target.value);
    
  };
  
  const handleSelect = ({ description }) =>
    () => {
      // When user selects a place, we can replace the keyword without request data from API
      // by setting the second parameter to "false"
      setValue(description, false);
      clearSuggestions();
  
      // Get latitude and longitude via utility functions
      getGeocode({ address: description }).then((results) => {
        const { lat, lng } = getLatLng(results[0]);
        console.log("📍 Coordinates: ", { lat, lng });
        setInputs(inputs += 1)

        if(position === 'start') {
          dispatch(setCoordinates({lat, lng}))
          dispatch(setStart({
            lat,
            lng,
            geocode: description
          }))
        }

        if(position === 'end') {
          dispatch(setEnd({
            lat,
            lng,
            geocode: description,
          }))
        }
      });
    };
  
  const renderSuggestions = () =>
    data.map((suggestion) => {
      const {
        place_id,
        structured_formatting: { main_text, secondary_text },
      } = suggestion;
  
      return (
        <li 
          key={place_id} 
          onClick={handleSelect(suggestion)}
          className="text-black border-b mt-1 py-1 cursor-pointer"
        >
          <strong>{main_text}</strong> <small>{secondary_text}</small>
        </li>
      );
    });
  
    return (
      <div ref={ref} className="flex flex-col w-10/12">
          <input
            value={value}
            onChange={handleInput}
            disabled={!ready}
            placeholder={placeholderText}
            className="text-slate-950 rounded px-1 drop-shadow-2xl"
          />
        {status === "OK" && <ul>{renderSuggestions()}</ul>}
      </div>
    );
  };