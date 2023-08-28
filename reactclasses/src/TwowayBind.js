import { useState } from "react";

function TwoWay() {
  //let num = 10;
  let [n, setN] = useState(20);
  return (
    <div className="container grid ">
      <h8>Two Way Binding</h8>
      <br />
      <nav className="nav gap 10">
        <p className="ms-20 ps-100">{n}</p>
        <button
          onClick={() => {
            setN(40);
          }}
        >
          Click!!
        </button>
      </nav>
      <br />
      <input
        type="text"
        onChange={(e) => {
          let num = e.target.value;
          setN(num);
        }}
      />
    </div>
  );
}

export default TwoWay;
