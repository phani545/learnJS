// export let person = { name: "Phani", Age: 35 };
// let x = 10;
// export default x;

//import Head from "./header";
//import User from "./user";
import React, { useState } from "react";
import "./App.css";
import TwoWay from "./TwowayBind";
import Product from "./Product";
import Cal from "./Calu";
//import movies from "./fun";

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

// let App = (props) => {
//   console.dir(props);
//   function displayMessage(n, e) {
//     alert(`button Clicked : ${n}`);
//     console.dir(e.target);
//   }
//   return (
//     <>
//       <div>HHi... </div>
//       <div style={{ display: "flex", gap: 20 }}>
//         <FlexItems />
//       </div>
//       <div>
//         <p>Arrow:- This is heading</p>
//         <p>This is heading2</p>
//         <movies />
//         <p>{props.children}</p>
//       </div>
//       <button
//         onClick={(e) => {
//           displayMessage(10, e);
//         }}
//       >
//         Click
//       </button>
//       <br />
//       <input
//         type="text"
//         onKeyUp={(e) => {
//           displayMessage(10, e);
//         }}
//       />
//     </>
//   );
// };

// function FlexItems() {
//   return (
//     <>
//       <div>This is Div1</div>
//       <div>This is Div2</div>
//       <div>This is Div3</div>
//     </>
//   );
// }

// let App = () => {
//   let [counter, updateCounter] = useState(0);
//   console.log(counter);

//   // function updateCounter() {
//   //   ++counter;
//   //   console.log(counter);
//   // }

//   return (
//     <>
//       <h1>Counter Value: {counter}</h1>
//       <button onClick={() => updateCounter(++counter)}>Change</button>
//     </>
//   );
// };

// class App extends React.Component {
//   state = { counter: 0, product: "OnePlus Mobile", price: 20000 };

//   constructor() {
//     super();
//     this.updatedPrice = this.updatedPrice.bind(this);
//   }
//   render() {
//     //console.log(this.state.counter);
//     return (
//       <>
//         <h1>Counter Value : {this.state.counter}</h1>
//         <button
//           onClick={() => {
//             this.setState({ counter: this.state.counter + 1 });
//           }}
//         >
//           Change
//         </button>
//         <br />
//         <p>Product Name is : {this.state.product}</p>
//         <p>Price is : {this.state.price}</p>
//         <br />
//         <input id="price" type="number" />
//         <button
//           onClick={this.updatedPrice}
//           //Arrow function
//           // onClick={() => {
//           //   let p = document.getElementById("price").value;
//           //   console.log(p);
//           //   // this.state1.price = price;
//           //   // console.log(this.state1);
//           //   this.setState({
//           //     price: p,
//           //   });
//           // }}
//         >
//           Update
//         </button>
//       </>
//     );
//   }

//   updatedPrice() {
//     let p = document.getElementById("price").value;

//     this.setState(
//       {
//         price: p,
//       },
//       () => console.log(this.state)
//     );
//   }
// }

//Function with use state hook

// function App() {
//   // let [price, updatePrice] = useState(25000);
//   // let [productname, updateName] = useState("Real me 8 PRO");

//   let [product, updateProduct] = useState({
//     pname: "Real me 8 PRO",
//     price: 16000,
//   });
//   return (
//     <>
//       <h5>ProductName: {product.pname}</h5>
//       <p>price: {product.price} </p>
//       <h>Product:{JSON.stringify(product)}</h>
//       <br />
//       <input id="pname" />
//       <button
//         onClick={() => {
//           let pn = document.getElementById("pname").value;
//           //productname = pn;
//           updateProduct({
//             ...product,
//             pname: pn,

//             //price: product.price,
//           });
//           console.log(`productname is : ${product.pname}`);
//           console.log(`pn is : ${pn}`);
//         }}
//       >
//         update
//       </button>
//       <br />
//       <input id="price" type="number" />
//       <button
//         onClick={() => {
//           let mprice = document.getElementById("price").value;
//           updateProduct({
//             //pname: product.pname,
//             ...product,
//             price: mprice,
//           });
//         }}
//       >
//         ChangePrice
//       </button>
//     </>
//   );
// }
// //background image
// function App() {
//   return (
//     <div className="Wrapper">
//       <p>BackGroung Color change</p>
//       <input
//         type="color"
//         onChange={(e) => {
//           document.body.style.background = e.target.value;
//         }}
//       />
//     </div>
//   );
// }

//Counter App

// function App() {
//   let [counter, setCounter] = useState(0);
//   let stock = 10;
//   return (
//     <>
//       <p align="center">Counter App</p>
//       <br />
//       <div className="Wrapper">
//         <button
//           className="Minus"
//           disabled={counter === 0}
//           onClick={() => {
//             if (counter > 0) {
//               setCounter(counter - 1);
//             }
//           }}
//         >
//           -
//         </button>
//         <p className="counter">{counter}</p>
//         <button
//           className="Plus"
//           disabled={counter === stock}
//           onClick={() => {
//             if (counter < stock) {
//               setCounter(counter + 1);
//             }
//           }}
//         >
//           +
//         </button>
//       </div>
//     </>
//   );
// }

// //props destructuring
// function App() {
//   let prod1 = {
//     id: 1,
//     name: "Lenovo Think Pad",
//     aprice: 120000,
//     dprice: 100000,
//   };
//   return <Product {...prod1} />;
// }

//Todo

function App() {
  let [todoInput, updateInput] = useState("test");
  let [todolist, updateTodolist] = useState([
    {
      id: 1,
      task: "React JS",
    },
    { id: 2, task: "Angular" },
  ]);
  let ran = 3;

  function addNewTodo() {
    if (todoInput == "") {
      alert("Add New Task");
    } else {
      let newtodos = [
        ...todolist,
        {
          id: ran++,
          task: todoInput,
        },
      ];
      updateTodolist(newtodos);
    }
  }

  function deleteTodo(id) {
    let updatedtodo = todolist.filter((Todo) => {
      return Todo.id != id;
    });
    updateTodolist(updatedtodo);
  }
  return (
    <>
      <div className="container mt-5 w-50">
        <h3 className="text-center">Todo App using Reaact</h3>
        <div className="input-group">
          <input
            className="form-control"
            type="text"
            value={todoInput}
            onChange={(e) => {
              let task = e.target.value;
              updateInput(task);
            }}
          />
          <button
            onClick={() => {
              addNewTodo();
            }}
            className="btn btn-primary"
          >
            Add
          </button>
        </div>
        <ul className="list-group mt-4">
          {todolist.map((todo) => {
            return (
              <li className="list-group-item">
                <p>{todo.task}</p>
                <button
                  className="btn"
                  onClick={() => {
                    deleteTodo(todo.id);
                  }}
                >
                  ❌
                </button>
              </li>
            );
          })}
        </ul>
      </div>
      <br />
      <TwoWay />
      <br />
      <br />
      <Cal />
    </>
  );
}

export default App;
