import React, { useState } from 'react';
import Tweet from "./Tweet";
import './App.css';

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

  // const [isRed, setRed] = useState(false);
  // const [count, setCount] = useState(0);

  // const increment = () => {
  //   setCount(count + 1);
  //   setRed(!isRed);

  const [users, setUsers] = useState([
    { name: "Lights", message: "light, light, light, light" },
    { name: "Filter", message: "filter, filter, filter" },
    { name: "Moon", message: "moon, moon, moon, moon" },
    { name: "Hope", message: "hope, hope, hope, hope" }
  ])

  return (
    <div className="App">
      {/* <Tweet name="Lights" message="light, light, light, light" />
      <Tweet name="Filter" message="filter, filter, filter"/>
      <Tweet name="Moon" message="moon, moon, moon, moon"/>
      <Tweet name="Hope" message="hope, hope, hope, hope"/> */}

      {/* <h1 className={isRed ? "red" : ""}>Change my color!</h1>
      <button onClick={increment}>Increment</button>
      <h1>{count}</h1> */}
      {users.map(user =>(
        <Tweet name={user.name} message={user.message} />
      ))}

    </div>
  )
}

export default App;