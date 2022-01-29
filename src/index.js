import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import App from './App';

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('products')
);

/**
 * Day 1:
 * 1. Why React? - Create UI components/blocks in faster way
 * 2. npx create-react-app app-name
 * 3. open project in any IDE/CodeEditor - VS code / codesandbox.io
 * 4. public - index.html, src - index.js, package.json
 * 5. npm start > localhost:3000
 * 6. react-dom > render react components into DOM (ReactDOM.render(component, html-element))
 * 7. JSX - Javascript XML
 * 8. Create Custom components
 * 9. Reuse custom component
 * 10. Passing Properties/attributs as props > {}
 * 11. Use props/js in JSX by wrapping it inside `{}`
 * 12. Using list in JSX (rendering using JS map method)
 * 13. prop - unique `key` prop while rendering list
 * 
 */

/**
 * App - State - cartItems
 * App - addToCart > item
 * 
 * App(addToCart) > ProductList(onAdd) > Card(onAdd)
 */

/**
 * Day 2:
 * What is hook?
 * State management
 * Props drilling
 * Passing data from child to parent component
 */

/**
 * Day 3:
 * 1. Design Cart and its components
 * 2. Add a cart button on the top right
 * 3. Create a modal component to list the items added to the cart
 * 4. Open the modal if cart button is clicked
 * 5. Product Item component to list in cart
 * 6. Create Counter component
 */