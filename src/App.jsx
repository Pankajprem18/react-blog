import { useState } from "react";
import Header from "./Header";
import Login, { Profile, Setting, userKey } from "./userComponent";
import ToDo from "./ToDo";

function App() {
  const name = "Pankaj Prem";
  const userObj = {
    name: "Simu",
    email: "kumariusharani74@gmail.com",
    age: 22
  }
  const userArray = ['simu', 'prem', 'puchu'
  ]
  let x = 10;
  let y = 20;
  let path = "https://picsum.photos/id/237/200/300"
  let z = x * y;

  function fruit() {
    return (
      <div>apple</div>
    )
  }
  function sum(a, b) {
    return a + b;
  }
  function operation(a, b, op) {
    if (op == "+") {
      return a + b;
    } else if (op == "-") {
      return a - b;
    } else {
      return a * b;
    }
  }
  // object and array

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
    <h1>JSX with Curly Braces</h1>
    <h1>{name ? name : "user not found"}</h1>
    <h1>{z}</h1>
    <h1>{fruit()}</h1>
    <h1>{sum(10, 100)}</h1>
    <h1>result= {operation(20, 10, "+")}</h1>

    <ToDo />
    <h1>{userObj.name}</h1>
    <h1>{userArray[0]}</h1>
    <h1>Pankaj Prem ToDo</h1>
<br />
     <input type="text" value={name} id={name} />
    <img src={path} alt="random" class="photo" />

  </>

  )
}

export default App;