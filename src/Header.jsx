function Header() {
    // alert(sum());
    return (
    <div>
        <h4> Header file</h4>
        <h2>Header file</h2>
        <Fruit />
        <Colors />
    </div>
    )
}

function Fruit() {
    return (
        <div>
            <h4>Apple</h4>
        </div>
    )
}

function Colors() {
    return (
        <div>
            <p class="color-red"> red color</p>
        </div>
    )
}
function sum() {
    return 10 + 10;
}

export default Header;