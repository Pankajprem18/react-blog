function Props({ userDetails }) {
    return (
        <div>
            <br />
            <h1>Props in React js</h1>
            <hr />
            <h2>Name: {userDetails.name}</h2>
            <h2>Age: {userDetails.age}</h2>
            <h2>Email: {userDetails.email}</h2>
            <hr />
            

        </div>
    )
}
export default Props;