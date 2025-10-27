import { useState } from "react";
import Fun from "./CSS/index";

function Dynamic() {
    const [cartStyle, setCardStyle] = useState({
        border: '1px solid #35248aff',
        width: "200px",
        boxShadow: "1px 2px 3px 0px #cccccc57",
        margin: "10px"
    })
    const [textColor, setTextColor] = useState('black')
    const [grid, setGrid] = useState(true);

    const updateTheme = (bgColor, textColor) => {
        setCardStyle({ ...cartStyle, backgroundColor: bgColor });
        setTextColor(textColor);
    }

    return (
        <>
            <h1 style={{ color: 'red' }}>Dynamic and Conditional Inline Style</h1>
            <button onClick={() => { updateTheme('gray', 'red') }}>Gray Theme</button>

            <button onClick={() => { updateTheme('white', 'black') }}>Default Theme</button>

            <button onClick={()=> setGrid(!grid)}>Toggle Grid</button>
            
            <div style={{ display: grid? 'flex':'block', flexWrap: 'wrap' }}>
                <div style={cartStyle}>
                    <img
                        style={{ width: '200px' }}
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRH87TKQrWcl19xly2VNs0CjBzy8eaKNM-ZpA&s"
                        alt="Profile"
                    />
                    <div style={{ padding: '15px', color: textColor }}>
                        <h4>Pankaj Prem</h4>
                        <p>Software Engineer</p>
                    </div>
                </div>
                <div style={cartStyle}>
                    <img
                        style={{ width: '200px' }}
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRH87TKQrWcl19xly2VNs0CjBzy8eaKNM-ZpA&s"
                        alt="Profile"
                    />
                    <div style={{ padding: '15px', color: textColor }}>
                        <h4>Pankaj Prem</h4>
                        <p>Software Engineer</p>
                    </div>
                </div>
                <div style={cartStyle}>
                    <img
                        style={{ width: '200px' }}
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRH87TKQrWcl19xly2VNs0CjBzy8eaKNM-ZpA&s"
                        alt="Profile"
                    />
                    <div style={{ padding: '15px', color: textColor }}>
                        <h4>Pankaj Prem</h4>
                        <p>Software Engineer</p>
                    </div>
                </div>
                <div style={cartStyle}>
                    <img
                        style={{ width: '200px' }}
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRH87TKQrWcl19xly2VNs0CjBzy8eaKNM-ZpA&s"
                        alt="Profile"
                    />
                    <div style={{ padding: '15px', color: textColor }}>
                        <h4>Pankaj Prem</h4>
                        <p>Software Engineer</p>
                    </div>
                </div>
                <div style={cartStyle}>
                    <img
                        style={{ width: '200px' }}
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRH87TKQrWcl19xly2VNs0CjBzy8eaKNM-ZpA&s"
                        alt="Profile"
                    />
                    <div style={{ padding: '15px', color: textColor }}>
                        <h4>Pankaj Prem</h4>
                        <p>Software Engineer</p>
                    </div>
                </div>
                <div style={cartStyle}>
                    <img
                        style={{ width: '200px' }}
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRH87TKQrWcl19xly2VNs0CjBzy8eaKNM-ZpA&s"
                        alt="Profile"
                    />
                    <div style={{ padding: '15px', color: textColor }}>
                        <h4>Pankaj Prem</h4>
                        <p>Software Engineer</p>
                    </div>
                </div>
                <div style={cartStyle}>
                    <img
                        style={{ width: '200px' }}
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRH87TKQrWcl19xly2VNs0CjBzy8eaKNM-ZpA&s"
                        alt="Profile"
                    />
                    <div style={{ padding: '15px', color: textColor }}>
                        <h4>Pankaj Prem</h4>
                        <p>Software Engineer</p>
                    </div>
                </div>
                <div style={cartStyle}>
                    <img
                        style={{ width: '200px' }}
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRH87TKQrWcl19xly2VNs0CjBzy8eaKNM-ZpA&s"
                        alt="Profile"
                    />
                    <div style={{ padding: '15px', color: textColor }}>
                        <h4>Pankaj Prem</h4>
                        <p>Software Engineer</p>
                    </div>
                </div>
            </div>
            <Fun/>
        </>
    );
}

export default Dynamic;
