import React, { useState } from "react";

export const Todos = () => {
  const [inputValue, setInputValue] = useState("");
  const [tasks, setTasks] = useState([]);

  return (
    <div className="container">
      <div>
        <h1>TODO'S LIST</h1>
      </div>
      <ul className="items">
        <li className="input-li">
          <input
            type="text"
            placeholder="Enter Task!"
            onChange={(e) => setInputValue(e.target.value)}
            value={inputValue}
            onKeyDown={(e) => {
              if (e.key === "Enter" && inputValue.trim() !== "") {
                setTasks(tasks.concat([inputValue.trim()]));
                setInputValue("");
              }
            }}
            autoComplete="off"
          />
        </li>
        {tasks.map((item, index) => (
          <li
            key={index}
            onClick={() =>
              setTasks(
                tasks.filter((t, currentIndex) => index !== currentIndex)
              )
            }
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};
