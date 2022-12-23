import React from "react";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Item from "./Item";
import "./Input.css";

function Input() {
  const [item, setItem] = useState("");
  const [itemList, setItemList] = useState([]);
  const [finishedList, setFinishedList] = useState([]);
  // const unfinished = false;
  // const fininshed = true;

  const getData = (val) => {
    // console.log(val.target.value);
    setItem(val.target.value);
  };

  const addItemEnter = (e) => {
    if (e.key === "Enter" && item.length > 0) {
      setItemList(itemList.concat([item]));
      setItem("");
    }
  };

  const addItemButton = () => {
    if (item.length > 0) {
      const newList = [...itemList, item];
      setItemList(newList);
      setItem("");
    }
  };

  function deleteItem(item) {
    const newList = itemList.filter((todo) => todo !== item);
    setItemList(newList);
  }

  function moveFinished(item) {
    const newList = itemList.filter((todo) => todo !== item);
    setItemList([...newList]);
    setFinishedList([...finishedList, item]);
  }

  return (
    <>
      <input
        type="text"
        id="to-do-item"
        name="to-do-item"
        placeholder="e.g read book"
        value={item}
        onChange={getData}
        onKeyDown={addItemEnter}
      ></input>
      <button id="submit" onClick={addItemButton}>
        Submit
        {/* <FontAwesomeIcon icon="fa-solid fa-circle-chevron-right" /> */}
      </button>

      {/* render the list */}
      <ul>
        {itemList.map((item) => (
          <>
            <li key={item}>
              <Item value={item} status={false}></Item>
              <button onClick={() => deleteItem(item)}>Delete</button>
              <button onClick={() => moveFinished(item)}>Finished</button>
            </li>
          </>
        ))}
      </ul>

      {/* render the finished list */}
      <ul>
        {finishedList.map((item) => (
          <>
            <li key={item}>
              <Item value={item} status={true}></Item>
              <button onClick={() => deleteItem(item)}>Delete</button>
              {/* <button onClick={() => moveFinished(item)}>Finished</button> */}
            </li>
          </>
        ))}
      </ul>
    </>
  );
}

export default Input;
