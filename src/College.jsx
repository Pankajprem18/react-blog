import { useState } from "react";
import Student from "./Student";

function College({C_name}) {
    let [student, setStudent] = useState();
    return (
        <div>
            <h1>College Name</h1>
            <hr />
            <h3>CollegeName: {C_name[0]}</h3>
            <hr />
           {student && <Student name ={student}/>}
            <button onClick={()=>setStudent("Monu")}>Update Student name</button>
        </div>
    )
}
export default College;