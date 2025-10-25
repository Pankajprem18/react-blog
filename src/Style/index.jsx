import Dynamic from "./Dynamic";

function Styles() {
    const cartStyle = {
        border: '1px solid #35248aff',
        width: "200px",
        boxShadow: "1px 2px 3px 0px #cccccc57",
        margin: "10px"
    }
    return (
        <>
            <h1 style={{ color: 'red' }}>Inline Style in React Js</h1>
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                <div style={cartStyle}>
                    <img style={{ width: '200px' }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRH87TKQrWcl19xly2VNs0CjBzy8eaKNM-ZpA&s" alt="" />
                    <div style={{ padding: '15px' }}>
                        <h4>Pankaj Prem</h4>
                         <p>Software Engineer</p>
                    </div>
                </div>
                <div style={cartStyle}>
                    <img style={{ width: '200px' }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRH87TKQrWcl19xly2VNs0CjBzy8eaKNM-ZpA&s" alt="" />
                    <div style={{ padding: '15px' }}>
                        <h4>Nirmal Raj</h4>
                        <p>Digital Marketing</p>
                    </div>
                </div>
                <div style={cartStyle}>
                    <img style={{ width: '200px' }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRH87TKQrWcl19xly2VNs0CjBzy8eaKNM-ZpA&s" alt="" />
                    <div style={{ padding: '15px' }}>
                        <h4>Aman Raj Rana</h4>
                        <p>Senior Software Engineer</p>
                    </div>
                </div>
                <div style={cartStyle}>
                    <img style={{ width: '200px' }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRH87TKQrWcl19xly2VNs0CjBzy8eaKNM-ZpA&s" alt="" />
                    <div style={{ padding: '15px' }}>
                        <h4>Aman Raj Rana</h4>
                        <p>Senior Software Engineer</p>
                    </div>
                </div>
                <div style={cartStyle}>
                    <img style={{ width: '200px' }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRH87TKQrWcl19xly2VNs0CjBzy8eaKNM-ZpA&s" alt="" />
                    <div style={{ padding: '15px' }}>
                        <h4>Aman Raj Rana</h4>
                        <p>Senior Software Engineer</p>
                    </div>
                </div>
                <div style={cartStyle}>
                    <img style={{ width: '200px' }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRH87TKQrWcl19xly2VNs0CjBzy8eaKNM-ZpA&s" alt="" />
                    <div style={{ padding: '15px' }}>
                        <h4>Aman Raj Rana</h4>
                        <p>Senior Software Engineer</p>
                    </div>
                </div>
                <div style={cartStyle}>
                    <img style={{ width: '200px' }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRH87TKQrWcl19xly2VNs0CjBzy8eaKNM-ZpA&s" alt="" />
                    <div style={{ padding: '15px' }}>
                        <h4>Aman Raj Rana</h4>
                        <p>Senior Software Engineer</p>
                    </div>
                </div>
            </div>
            <Dynamic/>
        </>
    )
}
export default Styles;