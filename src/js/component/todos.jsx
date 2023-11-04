import React from "react";

export const Todos = (props) => {
  const handleInputChange = (event) => {
    props.onChange(event.target.value);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      props.onKeyPress(event.target.value);
      props.onChange("");
    }
  };

  return (
    <div className="container">
      <div>
        <h1>TODO'S LIST</h1>
      </div>
      <form className="item-form">
        <input
          value={props.inputValue}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
          type="text"
          className="form-input"
          id="item-input"
          name="item"
          placeholder="Enter Task!"
          autoComplete="off"
        />
      </form>
      <ul className="items">
        {props.inputValue && <li>{props.inputValue}</li>}
      </ul>
    </div>
  );
};
