import { useState } from "react";
import Student from "./Student";
import Dprops from "./Dprops";
import Wrapper from "./Wrapper";

function College({ C_name }) {
    let [student, setStudent] = useState();
    return (
        <div>
            <h1>College Name</h1>
            <hr />
            <h3>CollegeName: {C_name[0]}</h3>
            <hr />
            {student && <Student name={student} />}
            <button onClick={() => setStudent("Monu")}>Update Student name</button>

            <Dprops name="Pankaj Prem" />
            <Dprops name="hello, Prem" />
            <Dprops />
            <Wrapper color="orange">
                <h1>Wrapper section</h1>
            </Wrapper>

            <Wrapper>
                <h2>Wrapper HTML use</h2>
            </Wrapper>

            <Wrapper color="blue">
                <h2>Hello Pankaj</h2>
            </Wrapper>



        </div>
    )
}
export default College;