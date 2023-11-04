import React, { useState } from "react";
import { Todos } from "./todos";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
  // const tasks [task, setTask] = useState ("")
  const [inputValue, setInputValue] = useState("");
  const [task, setTask] = useState([]);

  const handleInputChange = (newValue) => {
    setInputValue(newValue);
  };

  return <Todos onChange={handleInputChange} newInput={inputValue} />;
};

export default Home;
