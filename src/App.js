import React from "react";
import ClickCount from "./components/clickCount";
import HoverCount from "./components/hoverCount";

const App = () => {
  return (
    <div>
      <ClickCount />
      <hr />
      <HoverCount />
    </div>
  );
};

export default App;
