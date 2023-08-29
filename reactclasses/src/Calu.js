import Key from "./keypad";
import "./Calu.css";
import { useState } from "react";

function Cal() {
  let [input, setInput] = useState("");
  function handleClick(value) {
    setInput(input + value);
  }
  function caluclate() {
    let cal = eval(input);
    setInput(cal);
  }
  function handClear() {
    setInput("");
  }
  return (
    <div className="con">
      <h6>Caluclator App Using React:</h6>
      <div className="caluclator">
        <input type="text" value={input} className="output" />
        <Key
          handleClick={handleClick}
          handClear={handClear}
          caluclate={caluclate}
        />
      </div>
    </div>
  );
}

export default Cal;
