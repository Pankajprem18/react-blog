import { useState } from "react";
import Header from "./Header";
import Login, {Profile, Setting, userKey} from "./userComponent";
import ToDo from "./ToDo";

function App(){
  // const [counter, setCounter]= useState(0);
  // const userName = "Anil Sindhu";
  // let x=20;
  // let y=30;
  return (<>
    
    {/* <h1>Counter val :{counter}</h1>
    <Header/>
    <Login/>
    <Profile/>
    <Setting/>
    <h1>{userKey}</h1>
    
    <button onClick= {()=> setCounter(counter+1)}>Increase Counter val</button> */}
    {/* <h1>{userName}</h1>
    <h1>{10+20+30}</h1>
    <h1>{x*y}</h1>
    <button onClick={()=>alert('hello')}>Click</button> */}
    <ToDo/>
  </>
  
  )
}

export default App;