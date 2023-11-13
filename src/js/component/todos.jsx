import React, { useState, useEffect } from "react";

export const Todos = () => {
  const [inputValue, setInputValue] = useState("");
  const [tasks, setTasks] = useState([]);
  const [apiData, setApiData] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://playground.4geeks.com/apis/fake/todos/user/luiyilatam23"
        );
        const data = await response.json();
        setTasks(data.task || []);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  const syncWithApi = async (updatedTasks) => {
    try {
      const response = await fetch(
        "https://playground.4geeks.com/apis/fake/todos/user/luiyilatam23",
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedTasks),
        }
      );
      const data = await response.json();
      console.log(data);
      setErrorMessage("");
    } catch (error) {
      console.log(error);
      setErrorMessage("Failed to sync with the server. Please try again.");
    }
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleEnterKey = (e) => {
    if (e.key === "Enter" && inputValue.trim() !== "") {
      const newTask = { label: inputValue.trim(), done: false };

      if (tasks.some((task) => task.label === newTask.label)) {
        setErrorMessage("Task already exists!!");
        return;
      }

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

  const handleDeleteAll = async () => {
    try {
      const response = await fetch(
        "https://playground.4geeks.com/apis/fake/todos/user/luiyilatam23",
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await response.json();
      console.log(data);
      setTasks([]);
    } catch (error) {
      console.log(error);
    }
  };

  const remainingTasks = tasks.filter(
    (task) => task.label && task.label.trim() !== ""
  ).length;

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
        <div>
          {errorMessage && <div className="error-message">{errorMessage}</div>}
        </div>
        {remainingTasks === 0 ? (
          <div className="task-counter">No tasks, add a task!</div>
        ) : (
          tasks.map((item, index) => (
            <li key={index} className="task">
              {item.label}
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
