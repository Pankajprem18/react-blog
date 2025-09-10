import { useState } from "react";

function Checkboxes() {
    const [skill, setSkill] = useState([]);
    const HandleSkills = (event) => {
        setSkill(event.target.value, event.target.checked);

        if (event.target.checked) {
            setSkill([...skill, event.target.value])//using spread operator
        }
        else {
            setSkill([...skill.filter((item) => item != event.target.value)])
        }
    }
    return (
        <div>
            <h1>Handle Checkbox in React js</h1>
            <input onChange={HandleSkills} type="checkbox" id="php" value="PHP" />
            <label htmlFor="php">PHP</label>
            <br />
            <br />
            <input onChange={HandleSkills} type="checkbox" id="js" value="JS" />
            <label htmlFor="js">JS</label>
            <br />
            <br />
            <input onChange={HandleSkills} type="checkbox" id="cpp" value="CPP" />
            <label htmlFor="cpp">CPP</label>
            <br />
            <br />
            <input onChange={HandleSkills} type="checkbox" id="c" value="C" />
            <label htmlFor="c">C</label>
            <br />
            <br />
            <input onChange={HandleSkills} type="checkbox" id="java" value="Java" />
            <label htmlFor="java">Java</label>
            <br />
            <br />
            <input onChange={HandleSkills} type="checkbox" id="python" value="python" />
            <label htmlFor="python">python</label>

            <h1>{skill.toString()}</h1>
        </div>
    )
}
export default Checkboxes;