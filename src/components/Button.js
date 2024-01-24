import React from "react";

function Button(props) {
  return (
    <>
      <button style={{ color: props.color }}>
        This is a {props.color} button
      </button>
    </>
  );
}

export default Button;
