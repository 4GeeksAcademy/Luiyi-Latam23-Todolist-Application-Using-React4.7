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
        <div>
          <input
            className="input-field"
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
        </div>
        {tasks.map((item, index) => (
          <li
            key={index}
            className="task"
            onClick={() =>
              setTasks(
                tasks.filter((t, currentIndex) => index !== currentIndex)
              )
            }
          >
            {item}
            <span
              className="delete-icon"
              onClick={() =>
                setTasks(
                  tasks.filter((t, currentIndex) => index !== currentIndex)
                )
              }
            >
              &#10006;
            </span>
          </li>
        ))}
        <div className="task-counter">{tasks.length} tasks left</div>
      </ul>
    </div>
  );
};
