import React from 'react';
import Hello from './sayHello';

// Using <div> inside a function - how?
// That's why import React here
// What react does is that it compiles the code returned within the function and returns it as html
// What actually happens behind the scenes > React.createElement(div)
// The html tags written inside the function is actually javascript or more precisely, it's JSX
// {} << Curly braces means you can use javascript here. Everything written inside these curly braces is going to be javascript
// eg. <button onClick={sayHello}>Hello</button>
// Note: <button onClick={sayHello()}>Hello</button>, if you write parenthesis for this method,
// because that would invoke the function as soon as it is rendered on the screen

function App() {
  return (
    <div>
      <h1>This is the app component</h1>
      <Hello />
    </div>
  )
}

export default App;