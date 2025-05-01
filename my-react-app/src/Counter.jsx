import React, {useState} from 'react';

function Counter(){


    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    }

    const decrement = () => {
        setCount(count - 1);
    }

    const reset = () => {
        setCount(0);
    }


    return(
        <dev className="counter-container">
            <p>{count}</p>
            <button onClick={decrement}>Decrement</button>
            <button onClick={increment}>increment</button>
            <button onClick={reset}>Reset</button>

        </dev>
    );

}
export default Counter