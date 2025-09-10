import { useState } from "react";
function RadioDropdown() {
    const [gender, setGender] = useState("female");
    const [city, setCity] = useState("");

    return (
        <div>
            <h1>Handle Radio and Dropdown</h1>
            <h4>Select Gender</h4>
            <input type="radio" onChange={(event) => setGender(event.target.value)} name="gender" value={'male'} checked={gender == 'male'} id="male" />
            <label htmlFor="male">Male</label>

            <input type="radio" onChange={(event) => setGender(event.target.value)} name="gender" value={'female'} checked={gender == 'female'} id="female" />
            <label htmlFor="female">Female</label>
            <h2>Selected gender : {gender}</h2>
            <br /> <br />
            <h4>Select City</h4>
            <select defaultValue={"option"}  onChange={(event)=> setCity(event.target.value)}>
                <option value="option">Select option</option>
                <option value="Noida">Noida</option>
                <option value="Delhi">Delhi</option>
                <option value="Pune">Pune</option>
            </select>

            <h2>Selected gender : {city}</h2>

        </div>
    )
}
export default RadioDropdown;