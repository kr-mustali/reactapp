import { createContext } from "react";

export const MyContext = createContext("");

const Context = (props) => {
  const text = "This is context";
  return (
    <MyContext.Provider value={{ text }}>{props.children}</MyContext.Provider>
  );
};

export default Context;
