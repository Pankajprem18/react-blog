import { useState } from "react";


function Hide_show() {
    const [display, setDisplay] = useState(true)
    const [count, setCount] = useState(0);
    return (

        <div>
            <br />
            <h1>Toggle in React</h1>
            <br />
            <button onClick={() => setDisplay(!display)}>Toggle</button>

            {
                display ? <h1> Pankaj</h1> : <h1>Invalid</h1> // single condition
            }
            <br />
            <button onClick={() => setCount(count + 1)}>Counter</button>
            {
                count == 0 ? <h1> Condition 0</h1>
                    : count == 1 ? <h1>Condition 1</h1>
                        : count == 2 ? <h1>Condition 2</h1>
                            : count == 3 ? <h1>Condition 3</h1>
                                : count == 4 ? <h1>Condition 4</h1>
                                    : count == 5 ? <h1>Condition 5</h1>
                                        : count == 6 ? <h1>Condition 6</h1>
                                            : count == 7 ? <h1>Condition 7</h1>
                                                : count == 8 ? <h1>Condition 8</h1>
                                                    : <h1>Other condtion </h1>
            }

        </div>
    )
}
export default Hide_show;