function costomRender(reactElemnet,root){
    // const domElement = document.createElement(reactElemnet.type)
    // domElement.innerHTML = reactElemnet.children
    // domElement.setAttribute('href',reactElemnet.props.href)
    // domElement.setAttribute('target', reactElemnet.props.target)
    // root.appendChild(domElement)

    const domElement =  document.createElement(reactElemnet.type)
    domElement.innerHTML = reactElemnet.children
    for (const prop in reactElemnet.props) {
        if(prop === "children") continue;
        domElement.setAttribute(prop, reactElemnet.props[prop])
    }
    root.appendChild(domElement)
}

const reactElemnet = {
    type: 'a',
    props: {
        href: 'https://www.google.com',
        target: '_blank'
    },
    children: 'Click me to Visit Google'
}

const root = document.getElementById("root")

costomRender(reactElemnet,root)