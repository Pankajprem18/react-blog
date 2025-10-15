
const Students = ({ student }) => {
    return (
        <div>
            <h3>Students</h3>
            {
                student.map((student) => (
                    <ul>
                        <li>{student.name}</li>
                        <ul>
                            <li>
                                {student.age}
                            </li>
                            <li>
                                {student.email}
                            </li>
                        </ul>
                    </ul>

                ))
            }
        </div>
    )
}
export default Students;