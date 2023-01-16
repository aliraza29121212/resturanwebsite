import React from "react";
import "./App.css";
import Resturant from "./component/Basics/Resturant";
import Todo from "./component/Todo/Todo";
import Temp from "./component/Weather/Temp";

const App = () => {
  return (
    <div className="" style={{ padding: " 0px 60px" }}>
      {/* <Resturant /> */}
      {/* <Todo /> */}
      <Temp />
    </div>
  );
};

export default App;
