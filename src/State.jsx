import { useState } from "react";
import Counter from "./Counter.jsx";

function State() {
    // let fruit = "Apple";
    // const changeFruit=()=>{
    //     fruit = "Banana";
    //     console.log(fruit);
    // }

    const [fruit, setFruit] = useState("Apple");
    const handleFruit = () => {
        setFruit("Banana");
    }

    return (
        <div>
            <h1>State in React Js </h1>
            {/* <h1>{fruit}</h1>
            <button onClick={changeFruit}>change the fruit name</button> */}
            <h2>{fruit}</h2>
            <button onClick={handleFruit}>Change fruit name</button>
            <br />
            <Counter/>

        </div>
    )
}
export default State;