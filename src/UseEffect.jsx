import { useEffect, useState } from "react";

function UseEffect() {
    const [count, setCount] = useState(0);
    const [data, setData] = useState(0);

    useEffect(() => {
        // callOnce();
        counterFunction();
        dataFunction();
    }, [count, data])

    function counterFunction() {
        console.log("dataFunction", data);
    }
    function dataFunction() {
        console.log("counterFunction", count);
    }

    function callOnce() {
        console.log("callOnce function called");
    }

    return (
        <div>
            <h1>Use of useEffect</h1>
            <button onClick={() => setCount(count + 1)}>Counter: {count}</button>
            <button onClick={() => setData(data + 1)}>data: {data}</button>

        </div>
    )
}
export default UseEffect;
4.37