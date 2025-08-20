
const App = () =>{
    // create element takes three parameters 
    // 1. what element we have to create - "div"
    // 2. properties of that object - HTML attributes - object - {}
    // 3. Child elements - it can be an array or can be another element 

    return React.createElement(
        "div",
        {},
        React.createElement(
            "h1",
            {},
            "Hello world from react 18 version"
        )

    )
}


const root = document.getElementById("root")

const dom_root = ReactDOM.createRoot(root)

dom_root.render(React.createElement(App))
