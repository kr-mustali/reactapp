import React from "react";
import { ACTIONS } from "./UseReducerToDO";

export default function TODO({ todo, dispatch }) {
  return (
    <div style={{ padding: "10px 10px" }}>
      <input
        type="checkbox"
        checked={todo.complete}
        onClick={() =>
          dispatch({ type: ACTIONS.TOGGLE_TODO, payload: { id: todo.id } })
        }
      />
      <span style={{ color: todo.complete ? "green" : "red" }}>
        {todo.name}
      </span>
      <button
        style={{ padding: "10px" }}
        onClick={() =>
          dispatch({ type: ACTIONS.DELETE_TODO, payload: { id: todo.id } })
        }
      >
        Delete
      </button>
    </div>
  );
}
