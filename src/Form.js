import React, { useEffect, useState, useContext, useRef } from "react";
import { MyContext } from "./Context";

export default function Form(props) {
  // Context
  const { name, setName } = useContext(MyContext);

  // State
  const [inputs, setInputs] = useState({});
  const [count, setCount] = useState(0);

  // Ref
  const inputElement = useRef();

  // Effect to update count every second
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCount((count) => count + 1);
    }, 1000);

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, [count]);

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputs.fname || !inputs.lname) {
      alert("Please fill in all required fields");
      return;
    }
    alert(
      `Welcome ${inputs.fname} ${inputs.lname}! You have selected ${inputs.carBrand}`
    );
    setInputs({});
  };

  // Function to handle input changes
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  // Function to focus on the input element
  const focusInput = () => {
    inputElement.current.focus();
  };

  // Cars array
  const cars = [
    { id: 1, brand: "Ford" },
    { id: 2, brand: "BMW" },
    { id: 3, brand: "Audi" },
  ];

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <form
        onSubmit={handleSubmit}
        style={{ maxWidth: "400px", margin: "0 auto" }}
      >
        {/* <h2>{text}</h2> */}
        <h2>{name}</h2>

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
        </div>
        <div>
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
        <div>
          <label>
            Select car:
            <select
              name="carBrand"
              value={inputs.carBrand || "BMW"}
              onChange={handleChange}
            >
              {cars.map((car) => (
                <option key={car.id} value={car.brand}>
                  {car.brand}
                </option>
              ))}
            </select>
          </label>
        </div>
        <br />
        <input type="submit" />
      </form>
      <br />
      <button onClick={focusInput}>Focus Input</button>
      <button onClick={() => setName("test")}>Test</button>
    </div>
  );
}
