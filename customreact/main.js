//this file is based on if i wnat to creat my react.

//it is a render function in which elements are created and injected
function customRender(reactElement, Container) {
    //    const domElement =  document.createElement(reactElement.type);
    //    domElement.innerHTML = reactElement.children
    //    domElement.setAttribute('href', reactElement.props.href)
    //    domElement.setAttribute('target', reactElement.props.target)
    //    Container.appendChild(domElement);

    const domElement = document.createElement(reactElement.type);
    domElement.innerHTML = reactElement.children
    for (const prop in reactElement.props) {
        if(prop === 'children') continue;
        domElement.setAttribute(prop, reactElement.props[prop])
    }
    Container.appendChild(domElement);
}

//defined the custom way properties, when i create eny element then all element's properties defined in this manner
const reactElement = {
    type: 'a',
    props: {
        href: "https://google.com",
        target: "_blank"
    },
    children: 'Click me to visit google'

}

//take a #root as a mainConatiner so i can inject my element 
const mainContainer = document.querySelector('#root');

//it is a custom render function that accept the reactElement and inject in mainContainer
customRender(reactElement, mainContainer);