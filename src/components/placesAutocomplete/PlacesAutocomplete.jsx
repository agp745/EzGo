'use client'

import usePlacesAutocomplete, { getGeocode, getLatLng } from "use-places-autocomplete";
import useOnclickOutside from "react-cool-onclickoutside";
import { useDispatch } from "react-redux";
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
      // When user clicks outside of the component, we can dismiss
      // the searched suggestions by calling this method
      clearSuggestions();
    });
  
    const handleInput = (e) => {
      // Update the keyword of the input element
      setValue(e.target.value);
      // if(e.target.value.length > 3 && priority ) {
      //   setIsType(true)
      // } else if (e.target.value.length <= 3 && priority) {
      //   setIsType(false)
      // }
    };
  
    const handleSelect =
      ({ description }) =>
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
        {/* We can use the "status" to decide whether we should display the dropdown or not */}
        {status === "OK" && <ul>{renderSuggestions()}</ul>}
      </div>
    );
  };