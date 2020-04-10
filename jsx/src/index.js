// Import the React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';

// Create a React Component
const App = () => {
    const buttonText = { text: 'Click me' };

    function getTime() {
        return (new Date()).toLocaleTimeString();
    }
    
    return (
    <div>
        <div>Current Time:
        <h3>{getTime()}</h3>
        </div>
    <label className="label" htmlFor="name">
        Enter name:
    </label>
    <input id="name" type="text" />
    <button style={{ backgroundColor: 'blue', color: 'white'}}>
        {buttonText.text}
    </button>
  </div>
    );
};

// Display component on screen
ReactDOM.render(
    <App />,
    document.querySelector('#root')
);