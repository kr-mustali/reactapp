import React from "react";
import Button from "../components/Button";
import Cars from "../components/Cars";
import { Link } from "react-router-dom";
export default function Home() {
  const length = 3;
  const cars = [
    { id: 1, brand: "Ford" },
    { id: 2, brand: "BMW" },
    { id: 3, brand: "Audi" },
  ];
  return (
    <>
      <h1>Hello World!</h1>

      {/* components and props practice */}
      <Button color="red" bg="blue" />
      <Button color="blue" bg="red" />

      {/* ternary operator */}
      {length > 4 ? <h2>Length is {length}</h2> : <h2>Length is small</h2>}

      {/* map() to render list */}
      <ul>
        {cars.map((car) => (
          <Cars car={car.brand} key={car.id} />
        ))}
      </ul>
      <p> React Router Example</p>
      <p>
        Fill the form form <Link to="/form">Click</Link>
      </p>
    </>
  );
}