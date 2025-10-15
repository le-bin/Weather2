import { createContext, useContext, useState } from "react";
import { getWeatherDataForCity } from "../api";

const WeatherContext = createContext(null);

export const useWeather = () => {
  return useContext(WeatherContext);
};

export const WeatherProvider = (props) => {
  const [data, setData] = useState(null);
  const [searchCity, setsearchCity] = useState(null);

  const fetchData = async () => {
    const response = await getWeatherDataForCity(searchCity);
    setData(response);
  };

  return (
    <WeatherContext.Provider
      value={{ searchCity, data, searchCity, fetchData }}
    >
      {props.children}
    </WeatherContext.Provider>
  );
};
