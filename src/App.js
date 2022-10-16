import './App.css';
import Counter from './Counter';
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);
  const onValueChange = event => setCount(event.target.value);
 
  return (
    <div className="App">
      <div className="container">
        <label>
          enter your starting number: 
        </label>
        <input 
        type="number"
        required
        value={count}
        onChange={onValueChange}
        />
        <div className="counter"> Count: { count } </div>
        <Counter count = {count} setCount = {setCount}/>
        <p 
          className='msg'
          style = {
            !count
              ? {display: 'block'}
              : {display: 'none'}
          }
        >
          You can't decrement below zero!!!!
          </p>
      </div>
    </div>
  );
}

export default App;
