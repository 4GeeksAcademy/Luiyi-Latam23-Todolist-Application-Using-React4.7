import React, { useState, useEffect } from "react";

export const Todos = () => {
  const [inputValue, setInputValue] = useState("");
  const [tasks, setTasks] = useState([]);
  const [apiData, setApiData] = useState([]);

  useEffect(() => {
    fetch("https://playground.4geeks.com/apis/fake/todos/")
      .then((response) => response.json())
      .then((data) => setApiData(data));
  }, []);

  const syncWithApi = (updatedTasks) => {
    fetch("https://playground.4geeks.com/apis/fake/todos/", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedTasks),
    });
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleEnterKey = (e) => {
    if (e.key === "Enter" && inputValue.trim() !== "") {
      const newTask = inputValue.trim();
      const updatedTasks = [...tasks, newTask];
      setTasks(updatedTasks);
      setInputValue("");
      syncWithApi(updatedTasks);
    }
  };

  const handleDeleteTasks = (index) => {
    const updatedTasks = tasks.filter(
      (t, currentIndex) => index !== currentIndex
    );
    setTasks(updatedTasks);
    syncWithApi(updatedTasks);
  };

  const handleDeleteAll = () => {
    setTasks((prevTasks) => {
      syncWithApi(prevTasks);
      return [];
    });
  };

  const remainingTasks = tasks.filter((task) => task.trim() !== "").length;

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
