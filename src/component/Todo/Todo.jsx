import React, { useState } from "react";
import "./style.css";

const Todo = () => {
  const [inputData, setInputData] = useState("");
  const [items, setItems] = useState([]);

  //add the items functions
  const addItem = () => {
    if (!inputData) {
      alert("please fill the data");
    } else {
      setItems([...items, inputData]);
      setInputData("");
    }
  };

  return (
    <>
      <div className="main-div">
        <div className="child-div">
          <figure>
            <img src="./images/todo.svg" alt="" />
            <figcaption>Add Your List Here</figcaption>
          </figure>
          <div className="addItems">
            <input
              type="text"
              placeholder="Add Item"
              className="form-control"
              value={inputData}
              onChange={(event) => setInputData(event.target.value)}
            />
            <button className="addbtn" onClick={addItem}>
              ADD
            </button>
          </div>
          <div className="showItems">
            {items.map((curElem, index) => {
              return (
                <div className="eachItem" key={index}>
                  <h3>{curElem}</h3>
                  <div className="todo-btn">
                    <i
                      class="fa-solid fa-pen-to-square"
                      style={{ color: "green" }}
                    ></i>
                    <i class="fa-solid fa-trash" style={{ color: "red" }}></i>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="showItems">
            <button className="btn effect04" data-sm-link-text="Remove All">
              <span>CHECK LIST</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Todo;
