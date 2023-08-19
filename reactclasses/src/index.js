import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

//let h1 = React.createElement("h1", {}, "This is Header element");

let root = ReactDOM.createRoot(document.getElementById("root"));

//let name = "My name is Phani Deep Challa";

// function Menu1() {
//   let m1 = ["Home", "Exit"];
//   // let menu = (
//   //   <ul>
//   //     <li className="text">{name}</li>
//   //     <li id="about">About Us</li>
//   //   </ul>
//   // );
//   return (
//     <header>
//       <ul>
//         <li className="text">{name}</li>
//         <li id="about">About Us</li>
//         <li>{m1[0]}</li>
//         <li>{m1[1]}</li>
//       </ul>
//     </header>
//   );
// }

// class Menu1 extends React.Component {
//   render() {
//     let m1 = ["Home", "Exit"];
//     console.log(person);
//     console.log(xyx);
//     return (
//       <header>
//         <ul>
//           <li className="text">{name}</li>
//           <li id="about">About Us</li>
//           <li>{m1[0]}</li>
//           <li>{m1[1]}</li>
//         </ul>
//         <p>{xyx}</p>
//       </header>
//     );
//   }
// }
root.render(
  <App>
    This is a App Component
    <br />
    <button>share</button>
  </App>
);
