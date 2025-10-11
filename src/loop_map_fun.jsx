import User from "./User_comp";

function LoopFun() {
    // const userName = ['anil', 'sam', 'peter', 'bruce'];
    const userData = [
        {
            name: 'Anil',
            age: 29,
            email: "anil@test.com",
            id: 1
        },
        {
            name: 'Sam',
            age: 19,
            email: "sam@test.com",
            id: 2
        },
        {
            name: 'bruce',
            age: 24,
            email: "bruce@test.com",
            id: 3
        },
        {
            name: 'peter',
            age: 29,
            email: "anil@test.com",
            id: 4
        }

    ]
    return (
        <div>
            <h1>Loop in JSX with Map Function</h1>
            <table border="1">
                <thead>
                    <tr>
                        <td>ID</td>
                        <td>Name</td>
                        <td>Email</td>
                        <td>Age</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        userData.map((user) => (
                            <tr key={user.id}>
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.age}</td>
                            </tr>
                        ))
                    }
                </tbody>

            </table>
            <h1>Dummy data</h1>
            <table border="1">
                <thead>
                    <tr>
                        <td>ID</td>
                        <td>Name</td>
                        <td>Email</td>
                        <td>Age</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Anil</td>
                        <td>anil@test.com</td>
                        <td>29</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>Anil</td>
                        <td>anil@test.com</td>
                        <td>29</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>Anil</td>
                        <td>anil@test.com</td>
                        <td>29</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>Anil</td>
                        <td>anil@test.com</td>
                        <td>29</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>Anil</td>
                        <td>anil@test.com</td>
                        <td>29</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>Anil</td>
                        <td>anil@test.com</td>
                        <td>29</td>
                    </tr>
                </tbody>
            </table>

            <h1>Reuse componet in Loop</h1>
            {
                userData.map((user) => (
                    <div key={user.id}>
                        <User data={user} />
                    </div>
                ))
            }
        </div>
    )
}
export default LoopFun;