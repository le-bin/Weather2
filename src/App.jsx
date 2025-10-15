import React from "react";
import { useEffect } from "react";
import "./App.css";
import Card from "./component/Card";
import Input from "./Component/Input";
import Button from "./component/Button";
import { useWeather } from "./context/Weather";
const App = () => {
  const weather = useWeather();
  console.log(weather);

  useEffect(() => {
    weather.fetchcurrentData();
  }, []);
  return (
    <div className="App">
      <h1>Weather-Forecast</h1>
      <Input />
      <Button onClick={weather.fetchData} value="Search" />
      <Card />
      <Button onClick={weather.resetData} value="Refresh" />
    </div>
  );
};

export default App;
