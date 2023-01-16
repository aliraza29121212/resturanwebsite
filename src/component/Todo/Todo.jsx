import React, { useState, useEffect } from "react";
import "./style.css";

//get data form localStorage
const getLocalData = () => {
  const list = localStorage.getItem("mytodolist");
  if (list) {
    return JSON.parse(list);
  } else {
    return [];
  }
};

const Todo = () => {
  const [inputData, setInputData] = useState("");
  const [items, setItems] = useState(getLocalData());
  const [isEditItem, setIsEditItem] = useState("");
  const [togglerButton, setTogglerButton] = useState(false);

  //add the items functions
  const addItem = () => {
    if (!inputData) {
      alert("please fill the data");
    } else if (inputData) {
      setItems(
        items.map((curElem) => {
          if (curElem.id === isEditItem) {
            return { ...curElem, name: inputData };
          }
          return curElem;
        })
      );
    } else {
      const mynewInputData = {
        id: new Date().getTime().toString(),
        name: inputData,
      };
      setItems([...items, mynewInputData]);
      setInputData("");
    }
  };

  // Edit Items Functon
  const editItem = (index) => {
    const item_todo_edited = items.find((curElem) => {
      return curElem.id === index;
    });
    setInputData(item_todo_edited.name);
    setIsEditItem(index);
  };

  // how to delete the items
  const deleteItem = (index) => {
    const updatedItems = items.filter((curElem) => {
      return curElem.id !== index;
    });
    setItems(updatedItems);
  };

  // Removve All Function
  const removeAll = () => {
    setItems([]);
  };

  // Save Data in LocalStorage
  useEffect(() => {
    localStorage.setItem("mytodolist", JSON.stringify(items));
  }, [items]);

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
            {items.map((curElem) => {
              return (
                <div className="eachItem" key={curElem.id}>
                  <h3>{curElem.name}</h3>
                  <div className="todo-btn">
                    <i
                      class="fa-solid fa-pen-to-square"
                      onClick={() => editItem(curElem.id)}
                      style={{ color: "green" }}
                    ></i>
                    <i
                      class="fa-solid fa-trash"
                      onClick={() => deleteItem(curElem.id)}
                      style={{ color: "red" }}
                    ></i>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="showItems">
            <button
              className="btn effect04"
              data-sm-link-text="Remove All"
              onClick={removeAll}
            >
              <span>CHECK LIST</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Todo;
