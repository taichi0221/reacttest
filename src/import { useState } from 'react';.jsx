import { useState } from 'react';
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    count++;
  };
  
  return (
  <div className='App'>
    <h1>UseState</h1>
    <button onClick={handleClick}>＋</button>
    <p>{count}</p>
  </div>
  );
};

export default App;

上記では直接countを変更しようとしているため再レンダリングが発生しない
5:00



import { useState } from 'react';
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount(count + 1);
  };
  
  return (
  <div className='App'>
    <h1>UseState</h1>
    <button onClick={handleClick}>＋</button>
    <p>{count}</p>
  </div>
  );
};

export default App;

上記はOK

import { useEffect,useState } from 'react';
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount(count + 1);
  };
  
  useEffect(() => {
    console.log("hello")
    setCount(count + 1)
  }, [count]);
  
  return (
  <div className='App'>
    <h1>UseState, UseEffect</h1>
    <button onClick={handleClick}>＋</button>
    <p>{count}</p>
  </div>
  );
};

export default App;

無限ループ