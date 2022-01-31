import styled from "styled-components"
import { mobile } from "../responsive"

const Login = () => {
    return (
        <Container>
            <Wrapper>
                <Title>SIGN IN</Title>
                <Form>
                    <Input placeholder="Username" />
                    <Input placeholder="Password" />
                </Form>
                <Button>LOGIN</Button>
                <Link href="/">DO NOT YOU REMEMBER YOUR PASSWORD</Link>
                <Link href="/">CREATE A NEW ACCOUNT</Link>
            </Wrapper>
        </Container>
    )
}

export default Login

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)), url("images/login.jpg");
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
`

const Wrapper = styled.div`
    width: 25%;
    padding: 20px;
    background-color: white;
    ${mobile({width: "70%"})}
`

const Title = styled.h2`
    font-size: 24px;
    font-weight: 300;
`

const Form = styled.form`
    display: flex;
    flex-direction: column;
`

const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 10px 0;
    padding: 10px;
`

const Button = styled.button`
    width: 40%;
    padding: 10px;
    cursor: pointer;
    border: none;
    background-color: teal;
    color: white;
    font-weight: 300;
`

const Link = styled.a`
    margin: 10px 0;
    display: block;
    color: #00aeff;
    font-size: 12px;
`