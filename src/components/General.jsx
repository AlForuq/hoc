import React, { useState } from "react";

const General = (Component) => {
  const G = () => {
    const [count, setCount] = useState(0);
    const increment = () => {
      setCount(count + 1);
    };
    return <Component count={count} setCount={increment} test="common" />;
  };
  return G;
};

export default General;
