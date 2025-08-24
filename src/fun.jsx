 const test = (name) => {
        alert("outside of the fuction:"+ name);
    }
function Fun() {
    //normal function 
    function callFun() {
        alert("function called")
    }
    // arrow function
    const demo = () => {
        alert("demo function called")
    }
    // arrow function with argument
    const test = (name) => {
        alert("inside of the fuction:" + name);
    }

    return (
        <div>
            <br />
            {/*normal callFun function called */}
            <button onClick={callFun}>click me</button>

            {/* arrow demo funciton called */}
            <button onClick={demo}> demo function called</button>

            {/* arrow function with argument */}
            <button onClick={() => test("pankaj")}>your name</button>
        </div>
    )

}

export default Fun;