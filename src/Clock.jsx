import { useEffect, useState } from "react";
import Student from "./Nested_loop";
import UseEffect from "./UseEffect";
const Clock = ({ color }) => {
    const [time, setTime] = useState(0);
    useEffect(() => {
        setInterval(() => {
            setTime(new Date().toLocaleTimeString());
        }, 1000);
    }, [])
    return (
        <div>
            <h1 style={{ color: color, backgroundColor: "#000", width: "170px", padding: "10px", borderRadius: "5px" }}
            >
                {time}</h1>
            <Student />
<UseEffect/>

        </div>
    )
}
export default Clock;