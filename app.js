let head = React.createElement(
  "h1",
  {
    id: "bg-red",
  },
  "This is React JS Demo"
);

let para = React.createElement("p", {}, "This Paragraph");

let wrapper = React.createElement("div", {}, [head, para]);

let ele = document.getElementById("root");

let root = ReactDOM.createRoot(ele);

root.render(wrapper);
