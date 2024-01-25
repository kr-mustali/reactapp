import { useEffect, useState } from "react";

export default function useCustomHook(initializer, component) {
  const [counter, setCounter] = useState(initializer);

  function resetCounter() {
    setCounter(counter + 1);
  }
  useEffect(() => {
    console.log(
      "The button of the " + component + " was clicked " + counter + " times"
    );
  });
  return resetCounter;
}
