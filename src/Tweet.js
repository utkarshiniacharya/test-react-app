import React from 'react';
import "./App.css"

// you cannot use class in react, instead use className
// <div className="tweet"> just doing this won't work
// you have to import your styles/css as well
function Tweet({ name, message}) {
  return (
    <div className="tweet">
        <h3>{name}</h3>
        <p>{message}</p>
        <h3>Number of likes</h3>
    </div>
  )
}

export default Tweet;