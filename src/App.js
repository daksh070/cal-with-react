// import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
import './cal.css';

function App() {


  const [input, setInput] = useState('');
  const handleClick = (value) => {
    if (value === "=")
      try {
        const evalResult = eval(input);
        setInput(evalResult);
      } catch (error) {
        setInput(' Error ');
      }
    else if (value === 'Clear') {
      setInput('');
    }
    else {
      setInput((prev) => prev + value);
    }
  };


  return (
    <div className="calculator">
      <h2>React Calculator</h2>
      <div className='screen'>
        <input type="text" value={input} placeholder='0' />
      </div>
      <div className="button">
        {['7', '8', '9', '/'].map((item) => (
          <button key={item} onClick={() => handleClick(item)}>
            {item}
          </button>
        ))}
        {['4', '5', '6', '*'].map((item) => (
          <button key={item} onClick={() => handleClick(item)}>
            {item}
          </button>
        ))}
        {['1', '2', '3', '-'].map((item) => (
          <button key={item} onClick={() => handleClick(item)}>
            {item}
          </button>
        ))}
        <button onClick={() => handleClick('0')}>0</button>
        <button onClick={() => handleClick('+')}>+</button>
        <button className="equals" onClick={() => handleClick('=')}>=</button>
        <button className="clear" onClick={() => handleClick('Clear')}>Clear</button>
      </div>
    </div>
  );
}

export default App;
