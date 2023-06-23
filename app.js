let head = React.createElement(
  "h1",
  {
    id: "bg-red",
  },
  "This is React JS Demo"
);
let ele = document.getElementById("root");

let root = ReactDOM.createRoot(ele);

root.render(head);
