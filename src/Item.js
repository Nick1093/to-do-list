import React, { useState, useEffect } from "react";
import "./Item.css";

function Item({ value, status }) {
  let statusStyle = {};
  if (status) {
    statusStyle = {
      backgroundColor: "green",
      color: "black",
      textDecoration: "line-through",
      display: "inline",
      border: "1px solid black",
      margin: "10px 500px 10px 15px",
    };
  } else {
    statusStyle = {
      backgroundColor: "red",
      color: "white",
      display: "inline",
      border: "1px solid black",
      margin: "10px 500px 10px 15px",
    };
  }
  return (
    <>
      <h3 style={statusStyle}>{value}</h3>
    </>
  );
}

export default Item;
