import React from "react";
import General from "./General";

const HoverCount = ({ test, count, setCount }) => {
  return (
    <div>
      <h1>
        Count: {count} {test}{" "}
      </h1>
      <button onMouseOver={setCount}>Hover Count </button>
    </div>
  );
};

export default General(HoverCount);
