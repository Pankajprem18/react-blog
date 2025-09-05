import { useState } from "react";
import C_component from "./C_component";

function Ifield() {
    const [val, setVal] = useState("Pankaj Kumar Mandal")
    return (
        <div>
            <hr />
            <h1>Get Input field Value</h1>
            <input type="text" placeholder="Enter your name" value={val} onChange={(event) => setVal(event.target.value)} />
            <h1>{val}</h1>
            <button onClick={() => setVal("")}>Clear </button>
            <C_component/>
        </div>
    )
}
export default Ifield;