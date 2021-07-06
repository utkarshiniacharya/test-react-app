import React from 'react';

function Hello() {
  const sayHello = () => {
    console.log('hello');
  }

  return (
    <div>
      <h1>Hello React</h1>
      <button onClick={sayHello}>Hello</button>
    </div>
  )
}

export default Hello;