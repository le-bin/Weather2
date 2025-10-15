import { createContext, useContext, useState } from "react";
import { getWeatherDataForCity, getWeatherDataForLocation } from "../api";

const WeatherContext = createContext(null);

export const useWeather = () => {
  return useContext(WeatherContext);
};

export const WeatherProvider = (props) => {
  const [data, setData] = useState(null);
  const [searchCity, setsearchCity] = useState("");

  const fetchData = async () => {
    const response = await getWeatherDataForCity(searchCity);
    setData(response);
  };

  const fetchcurrentData = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      getWeatherDataForLocation(
        position.coords.latitude,
        position.coords.longitude
      ).then((newData) => {
        // Force UI re-render even if data is same
        setData(null);
        setTimeout(() => {
          setData(newData);
        }, 0);
      });
    });
  };

  const resetData = () => {
    setsearchCity("");
    setData(null);
    fetchcurrentData();
  };

  return (
    <WeatherContext.Provider
      value={{
        searchCity,
        data,
        setsearchCity,
        fetchData,
        fetchcurrentData,
        resetData,
      }}
    >
      {props.children}
    </WeatherContext.Provider>
  );
};
