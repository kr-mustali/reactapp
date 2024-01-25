import { createContext, useState } from "react";

export const MyContext = createContext("");

const Context = (props) => {
  const [name, setName] = useState("this is from  context");
  return (
    <MyContext.Provider value={{ name, setName }}>
      {props.children}
    </MyContext.Provider>
  );
};

export default Context;
