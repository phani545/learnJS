// export let person = { name: "Phani", Age: 35 };
// let x = 10;
// export default x;

import Head from "./header";
import User from "./user";
import "./App.css";
import movies from "./fun";

// function App() {
//   let s1 = {
//     background: "green",
//     color: "white",
//   };
//   let users = [
//     {
//       id: 26,
//       name: "Moksha",
//       age: 5,
//       place: "Bangalore",
//     },
//     { id: 27, name: "Moksha Sri", age: 5.5, place: "Hyderabad" },
//   ];
//   return (
//     <div>
//       <Head />
//       <h1 style={s1}>This is Tag1</h1>
//       {users.map((u) => {
//         return (
//           <User
//             key={u.id}
//             id={u.id}
//             name={u.name}
//             age={u.age}
//             place={u.place}
//           />
//         );
//       })}
//     </div>
//   );
// }

// function App() {
//   return (
//     <div>
//       <h5>This is heading</h5>
//       <h6>This is paragraph</h6>
//     </div>
//   );
// }

let App = (props) => {
  console.dir(props);
  return (
    <div>
      <p>Arrow:- This is heading</p>
      <p>This is heading2</p>
      <movies />
      <p>{props.children}</p>
    </div>
  );
};

export default App;
