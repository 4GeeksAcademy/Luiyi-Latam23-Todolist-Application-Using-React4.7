import React from "react";

export const Todos = () => {
  return (
    <div className="container">
      <div className="ulContainer text-center">TODO'S LIST</div>
      <ul className="liContainer text-left">
        <li>Make the bed</li>
        <li>Take out the trash</li>
        <li>Go to the Gym</li>
        <li>Study</li>
        <li>Walk the dog</li>
      </ul>
    </div>
  );
};
