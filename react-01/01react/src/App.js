import React from "https://esm.sh/react@19.1.0";
import ReactDOM from "https://esm.sh/react-dom@19.1.0/client";


const App = () => {
  return React.createElement(
    "div",
    {},
    React.createElement("h1", {}, "Hello world using react 19 version")
  );
};

const root = document.getElementById("root");
const root_dom = ReactDOM.createRoot(root);
root_dom.render(React.createElement(App));
