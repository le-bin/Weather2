import React from "react";
import "./App.css";
import Card from "./component/Card";
import Input from "./Component/Input";
import Button from "./component/Button";
const App = () => {
  return (
    <div className="App">
      <h1>Weather-Forecast</h1>
      <Input />
      <Button value="Search" />
      <Card />
      <Button value="Refresh" />
    </div>
  );
};

export default App;
