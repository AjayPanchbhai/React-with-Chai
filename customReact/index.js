const render = (element, root) => {
  const newElement = document.createElement(element.type);
  newElement.innerHTML = element.text;
  for (const prop in element.props) {
    newElement.setAttribute(prop, element.props[prop]);
  }
  root.appendChild(newElement);
};

const root = document.getElementById("root");

const element = {
  type: "a",
  props: {
    href: "http://google.com",
    target: "_blank",
  },
  text: "Click me",
};

const element1 = {
  type: "a",
  props: {
    href: "http://google.com",
    target: "_blank",
  },
  text: "Click me",
};

render(element, root);
render(element1, root);
