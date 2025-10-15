import { useEffect, useState } from "react";

const Counts = ({ count, data }) => {

    const handleCounter = () => {
        console.log("handleCounter called");
    }
    const handleData = () => {
        console.log("handleData called");
    }

    useEffect(() => {
        handleCounter(); // this will only for update
    }, [count]);

    useEffect(() => {
        handleData(); // this will only for update
    }, [data]);

    useEffect(() => {
         console.log("Mounting phase only")// mounting only
    }, []);

    // unmount
    useEffect(() => {
        return () =>{
            console.log("Unmount phase only") // unmount phase only
        };
    }, [])

    return (
        <div>
            <h1>Counter value {count} </h1>
            <h1>Data value {data} </h1>
            
        </div>
    )
}
export default Counts;