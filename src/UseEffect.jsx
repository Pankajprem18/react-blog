import { useEffect, useState } from "react";
import Counts_call from "./Counts_call";
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

           <Counts_call/>
        </div>
    )
}
export default UseEffect;