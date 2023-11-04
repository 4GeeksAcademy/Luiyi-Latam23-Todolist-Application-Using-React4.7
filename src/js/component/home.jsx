import React, { useState } from "react";
import { Todos } from "./todos";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
  // const tasks [task, setTask] = useState ("")
  const [task, setTask] = useState([]);
  function tasks() {}

  return (
    <div>
      <Todos />
    </div>
  );
};

export default Home;
