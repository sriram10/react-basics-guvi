import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
  <App />,
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