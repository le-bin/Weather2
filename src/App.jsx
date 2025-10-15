import React from "react";
import Card from "./component/Card";
import Input from "./Component/Input";
import Button from "./component/Button";
const App = () => {
  return (
    <div className="App">
      <h1>Weather-Forecast</h1>
      <Card />
      <Input />
      <Button />
    </div>
  );
};

export default App;
