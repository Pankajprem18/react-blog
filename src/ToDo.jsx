function ToDo() {
    function CallFun(){
        alert("function called");
    }
    return (
        <div>
            <h1>Pankaj Prem ToDo</h1>
            <img src="https://picsum.photos/id/237/200/300" alt="random" class="photo" />

            <ul>
                <li>Invent new traffic lights</li>
                <li>Rehearse a movie scene</li>
                <li>improve the spectrum technology</li>
            </ul>
            <button onClick={CallFun}>Click Me</button>
        </div>

    )
}

export default ToDo;