import {useState} from 'react';

const Counter = () => {
    const [count, setCount ] = useState(0);

    const increaseCount = () => {
        setCount(prevCount => prevCount + 1);
    }

     const decreaseCount = () => {
        setCount(prevCount => prevCount - 1);
    }

  return (
    <div>
      <h1>Click the buttons to add or subtract. Count is {count}</h1>
      <button onClick={decreaseCount}> - </button>
      <button onClick={increaseCount} >+</button>
    </div>
  )
}

export default Counter
