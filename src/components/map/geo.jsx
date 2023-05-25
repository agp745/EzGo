import { useState, useEffect } from 'react';

const GeolocationComponent = () => {
  const [position, setPosition] = useState({
    latitude: null,
    longitude: null,
  });

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setPosition({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
          console.log('Latitude:', position.coords.latitude)
          console.log('Longitude:', position.coords.longitude)
        },
        (error) => {
          console.error(error.message);
        }
      );
    } else {
      console.error('Geolocation is not supported in this browser.');
    }
  }, []);

  return (
    <div>
      <p>
        Latitude: {position.latitude}, Longitude: {position.longitude}
      </p>
    </div>
  );
};

export default GeolocationComponent;

