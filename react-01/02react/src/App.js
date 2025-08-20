import React from "https://esm.sh/react@19.1.0";
import ReactDOM from "https://esm.sh/react-dom@19.1.0/client";

const Teachers = (props) => {
  console.log(props);

  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.name),
    React.createElement("p", {}, props.subject),
  ]);
};

const App = () => {

  return React.createElement(
      "div", 
      {}, 
      [
      React.createElement("h1", {}, "List of teachers and there subjects"),
      React.createElement(Teachers, {
        name: "Ashish",
        subject: "maths",
      }),

      React.createElement(Teachers, {
        name: "Akash",
        subject: "Physics",
      }),
      React.createElement(Teachers, {
        name: "Rohit",
        subject: "sports",
      }),
    ]
  );
};

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));
