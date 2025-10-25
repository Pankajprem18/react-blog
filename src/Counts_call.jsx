import { useState } from "react";
import Counts from "./Counts";
import Styles from "./Style";

function Counts_call() {
    const [count, setCount] = useState(0);
    const [data, setData] = useState(0);
    const [display, setDisplay] = useState(true);

    return (
        <div>
            <br />
            {display ? <Counts count={count} data={data} /> : null}

            <button onClick={() => setCount(count + 1)}>
                Counter value: {count}
            </button>

            <button onClick={() => setData(data + 1)}>
                Data value: {data}
            </button>

            <button onClick={() => setDisplay(!display)}>
                Toggle
            </button>
            <Styles/>
        </div>
    );
}

export default Counts_call;


