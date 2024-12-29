// function custRender(element, container) {
//     const domElement = document.createElement(element.type);
//     domElement.innerHTML = element.children;
//     domElement.setAttribute('href', element.props.href);
//     domElement.setAttribute('target', element.props.target);
//     container.appendChild(domElement);
// }



// above code is only for anchor tag with href and target attribute
// below code is more optimised and can be used for any type of element

function custRender(element, container) {
    const domElement = document.createElement(element.type);
    domElement.innerHTML = element.children;
    Object.keys(element.props).forEach((key) => {
        domElement.setAttribute(key, element.props[key]);
    });
    container.appendChild(domElement);
}


const root = document.getElementById('root');

const reactElement = {
    type: 'a',
    props: {
        href: 'http://google.com',
    },
    children: 'Click me!'
}

custRender(reactElement, root);



function myApp(){
    return (
        <div>
            <a href="http://google.com">Click me!</a>
        </div>
    )
}