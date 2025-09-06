import { useState } from "react";
import Checkboxes from "./CheckBoxes";

function C_component() {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    return (
            <div>

                <h1>Controller Component</h1>
                <form action="" method="get">
                    <input type="text" value={name} onChange={(event) => setName(event.target.value)} placeholder="Enter Name" />
                    <br /> <br />
                    <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} placeholder="Enter Password" />
                    <br /> <br />
                    <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} placeholder="Enter Email" />
                    <br /> <br />
                    <button>Submit</button>
                    <button onClick={() => { setName(''); setEmail(''); setPassword('') }}>Clear</button>
                    <h3>{name}</h3>
                    <h3>{password}</h3>
                    <h3>{email}</h3>
                </form>
                <Checkboxes/>
            </div>

    )
}
export default C_component;