
export const geolocator = async () => {
  return new Promise((resolve, reject) => {
    
    const successCallback = ({ coords }) => {
      const { latitude, longitude } = coords;
      const location = {
        lat: latitude,
        lng: longitude,
      };
      resolve(location);
    };
  
    const errorCallback = (error) => {
      reject(error);
    };
  
    navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
  });
};
