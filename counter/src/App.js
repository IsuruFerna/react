import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  function updateCount() {
    setCount(count + 1);
  }

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={updateCount}>Counter</button>
    </div>
  );
}

export default App;
