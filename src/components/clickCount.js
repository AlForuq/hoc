import React from "react";
import General from "./General";

const ClickCount = ({ test, count, setCount }) => {
  return (
    <div>
      <h1>
        Count: {count} {test}{" "}
      </h1>
      <button onClick={setCount}>Click Count </button>
    </div>
  );
};

export default General(ClickCount);
