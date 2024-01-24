import React, { useEffect, useState, useContext, useRef } from "react";
import { MyContext } from "./Context";

export default function Form(props) {
  //context
  const value = useContext(MyContext);
  const [inputs, setInputs] = useState({});

  //useRef
  const inputElement = useRef();
  const focusInput = () => {
    inputElement.current.focus();
  };

  const cars = [
    { id: 1, brand: "Ford" },
    { id: 2, brand: "BMW" },
    { id: 3, brand: "Audi" },
  ];
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputs.fname || !inputs.lname) {
      alert("Please fill in all required fields");
      return;
    }
    alert(
      `Welcome ${inputs.fname + " " + inputs.lname}! You have selected ${
        inputs.carBrand
      }`
    );
    setInputs({});
  };

  const [count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000);
  }, [count]);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        {/* <h1>I've rendered {count} times!</h1> */}
        <h2>{value.text}</h2>
        <div>
          <label>
            Enter Your First Name:
            <input
              type="text"
              name="fname"
              ref={inputElement}
              value={inputs.fname || ""}
              onChange={handleChange}
            />
          </label>
          <label>
            Enter Your Last Name:
            <input
              type="text"
              name="lname"
              value={inputs.lname || ""}
              onChange={handleChange}
            />
          </label>
        </div>
        <br />
        <label>
          Select car:
          <select
            name="carBrand"
            value={inputs.carBrand || "BMW"}
            onChange={handleChange}
          >
            {cars.map((car) => (
              <option value={car.brand}>{car.brand}</option>
            ))}
          </select>
        </label>
        <br />
        <input type="submit" />
        <br />
      </form>
      <button onClick={focusInput}>Focus Input</button>
    </>
  );
}
