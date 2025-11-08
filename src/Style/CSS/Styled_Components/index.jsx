import styled from "styled-components";

function StyledSection() {
    // first case
//     const Heading = styled.h1`
//     color:red;
//     border: 1px solid green;
//     border-radius:5px;
//     margin:20px;
//     padding:20px;
// `

// second case
 const Heading = styled.h1({
    color:'red',
    border: '1px solid green',
    borderRadius:'5px',
    margin:'20px',
    padding:'20px'
})
    const StyleBtn = styled.button`
    color:red;
    border-radius: 10px;
    width:130px;
    height:40px;
    margin:20px
`
    

    return (
        <div>
            <h1>Styled Component with React Js</h1>
            <Heading>Hello Heading 1</Heading>
            <Heading>Hello Heading 2</Heading>
            <Heading>Hello Heading 3</Heading>
            <Heading>Hello Heading 4</Heading>
            <StyleBtn>SignUp</StyleBtn>
            <StyleBtn>Back</StyleBtn>
            <StyleBtn>Login</StyleBtn>

        </div>
    );
}

export default StyledSection;