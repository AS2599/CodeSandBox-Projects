import { useState } from "react";

const CounterApp = () => {
  var [count, setCount] = useState(0);
  var isDisable = false;

  const handleIncrementClick = () => {
    console.log("Button Click");
    if (count == 10) {
      isDisable = true;
    }
    setCount(count + 1);
    console.log("Count value :- ", count);
  };

  const handleDecrementClick = () => {
    console.log("Button Click");
    if (count == -5) {
      isDisable = true;
    }
    setCount(count - 1);
    console.log("Count value :- ", count);
  };

  const handleInputChange = (eventDetails) => {
    console.log("Input Change");

    setCount(eventDetails.target.value);
  };

  return (
    <>
      <h1>Counter App</h1>
      <br />
      <h2>{count}</h2>

      <input
        onChange={handleInputChange}
        id="inputChange"
        type="number"
      ></input>
      <br />
      <br />

      <button disabled={count == 10} onClick={handleIncrementClick}>
        Increment
      </button>
      <button disabled={count == -5} onClick={handleDecrementClick}>
        Decrement
      </button>
    </>
  );
};

export default CounterApp;
