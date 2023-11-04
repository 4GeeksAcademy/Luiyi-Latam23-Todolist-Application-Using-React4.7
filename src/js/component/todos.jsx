import React from "react";

export const Todos = () => {
  return (
    <div className="container">
      <div>
        <h1>TODO'S LIST</h1>
      </div>
      <form className="item-form">
        <input
          type="text"
          className="form-input"
          id="item-input"
          name="item"
          placeholder="Enter Task!"
          autoComplete="off"
        />
      </form>
      <ul className="items">
        <li>Make the bed</li>
        <li>Take out the trash</li>
        <li>Go to the Gym</li>
        <li>Study</li>
        <li>Walk the dog</li>
      </ul>
    </div>
  );
};
