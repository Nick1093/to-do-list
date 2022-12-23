import React, { useState, useEffect } from "react";
import "./Item.css";

function Item({ value, status }) {
  let statusStyle = {};
  if (status) {
    statusStyle = {
      backgroundColor: "green",
      color: "black",
      textDecoration: "line-through",
      display: "block",
    };
  } else {
    statusStyle = {
      backgroundColor: "red",
      color: "white",
      display: "block",
    };
  }
  return (
    <>
      <h3 style={statusStyle}>{value}</h3>
    </>
  );
}

export default Item;
