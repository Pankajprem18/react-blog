import { useState } from "react";
import Header from "./Header";
import Login, {Profile, Setting, userKey} from "./userComponent";

function App(){
  const [counter, setCounter]= useState(0);
  return <>
    <h1>Counter val :{counter}</h1>
    <Header/>
    <Login/>
    <Profile/>
    <Setting/>
    <h1>{userKey}</h1>
    
    <button onClick= {()=> setCounter(counter+1)}>Increase Counter val</button>
    
  </>;
}

export default App;