function Wrapper({children, color}) {
    return (
        <div style={{color: color|| "red", border: "5px solid red", width: "300px", margin: "10px 0"}}>
            {children}
        </div>
    )
}
export default Wrapper;