import React from "react";
import UseStateCounter from "../components/UseStateCounter";
import UseReducerCounter from "../components/UseReducerCounter";

export default function Counter() {
  return (
    <>
      <h3 style={{ textAlign: "center" }}>This is using useState Hook:</h3>
      <UseStateCounter />
      <h3 style={{ textAlign: "center" }}>This is using useReducer Hook:</h3>
      <UseReducerCounter />
    </>
  );
}
