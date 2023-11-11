import React, { useState } from "react";

export const Todos = () => {
  const [inputValue, setInputValue] = useState("");
  const [tasks, setTasks] = useState([]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleEnterKey = (e) => {
    if (e.key === "Enter" && inputValue.trim() !== "") {
      setTasks(tasks.concat([inputValue.trim()]));
      setInputValue("");
    }
  };

  const handleDeleteTasks = (index) => {
    setTasks(tasks.filter((t, currentIndex) => index !== currentIndex));
  };

  const handleDeleteAll = (index) => {
    setTasks(tasks.filter((t, currentIndex) => index === ""));
  };

  const remainingTasks = tasks.filter((task) => task.trim() !== "").length;

  return (
    <div className="container">
      <div>
        <h1>TODO'S LIST!!</h1>
      </div>
      <ul className="items">
        <div>
          <input
            className="input-field"
            type="text"
            placeholder="Enter Task!"
            onChange={handleInputChange}
            value={inputValue}
            onKeyDown={handleEnterKey}
            autoComplete="off"
          />
        </div>
        {remainingTasks === 0 ? (
          <div className="task-counter">No tasks, add a task!</div>
        ) : (
          tasks.map((item, index) => (
            <li key={index} className="task">
              {item}
              <span
                className="delete-icon"
                onClick={() => handleDeleteTasks(index)}
              >
                &#10006;
              </span>
            </li>
          ))
        )}
        {remainingTasks > 0 && (
          <div>
            {remainingTasks} {remainingTasks === 1 ? "task" : "tasks"} left
          </div>
        )}
        <button className="btn btn-danger m-3" onClick={handleDeleteAll}>
          Delete All
        </button>
      </ul>
    </div>
  );
};
