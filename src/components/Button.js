import React from "react";

//react event practice
function Button(props) {
  const handleClick = (a) => {
    alert(props.bg + " " + a);
  };

  return (
    <>
      <button
        onClick={() => handleClick("Button Clicked")}
        style={{ color: props.color, backgroundColor: props.bg }}
      >
        This is a {props.bg} button
      </button>
    </>
  );
}

export default Button;
