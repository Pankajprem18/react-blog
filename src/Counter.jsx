import { useState } from "react";

const Counter = () => {
    const [count, setCount] = useState(0);
    const [rCounter, setRCounter]= useState(19);
    return (
        <div>
            <h1> Counter: {count}</h1>
            <button onClick={() => setCount(count + 1)}>Update Counter</button>
            <h1>R Counter: {rCounter}</h1>
            <button onClick={() => setRCounter(rCounter - 1)}>Update Counter</button>
        </div>
    );
}
export default Counter;