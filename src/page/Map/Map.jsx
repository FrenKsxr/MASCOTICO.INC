import React, { useEffect, useRef } from "react";

const Map = () => {
  const mapRef = useRef(null);

  useEffect(() => {
    
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;

          const map = new window.google.maps.Map(mapRef.current, {
            center: { lat: latitude, lng: longitude },
            zoom: 14, 
          });

          new window.google.maps.Marker({
            position: { lat: latitude, lng: longitude },
            map: map,
            title: "Tu ubicación",
          });

          const service = new window.google.maps.places.PlacesService(map);
          const request = {
            location: { lat: latitude, lng: longitude },
            radius: 5000, 
            keyword: "veterinarias",
          };

          service.nearbySearch(request, (results, status) => {
            if (status === window.google.maps.places.PlacesServiceStatus.OK) {
              results.forEach((place) => {
                new window.google.maps.Marker({
                  position: place.geometry.location,
                  map: map,
                  title: place.name,
                });
              });
            }
          });
        },
        (error) => {
          console.error("Error de geolocalización: ", error);
          alert("No pudimos obtener tu ubicación. Asegúrate de permitir el acceso a la ubicación.");
        }
      );
    } else {
      console.error("La geolocalización no está soportada por este navegador.");
      alert("Tu navegador no soporta la geolocalización.");
    }
  }, []);

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div
        ref={mapRef}
        style={{ width: "100%", height: "100vh" }} 
        className="border-4 border-gray-300 rounded-lg shadow-lg"
      ></div>
    </div>
  );
};

export default Map;
