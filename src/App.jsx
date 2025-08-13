import { useState } from "react";
import Header from "./Header";

function App(){
  const [counter, setCounter]= useState(0);
  return <>
    <h1>Counter val :{counter}</h1>
    <Header/>
    
    <button onClick= {()=> setCounter(counter+1)}>Increase Counter val</button>
    
  </>;
}

export default App;