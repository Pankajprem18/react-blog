

function Wrapper({ children, color }) {
  return (
    <div>
    <div
      style={{
        color: color || "red",
        border: "5px solid red",
        width: "300px",
        margin: "10px 0",
      }}
    >
      {children}

      
    </div>
    </div>
  );
}

export default Wrapper;
