import styled from "styled-components"
import { mobile } from "../responsive"

const Register = () => {
    return (
        <Container>
            <Wrapper>
                <Title>CREATE AN ACCOUNT</Title>
                <Form>
                    <Input placeholder="First Name" />
                    <Input placeholder="Last Name" />
                    <Input placeholder="Username" />
                    <Input placeholder="Email" />
                    <Input placeholder="Password" />
                    <Input placeholder="Confirm Password" />
                </Form>
                <Agreement>By creating an account, I consent to the processing of my personal data in accordance with the <b>Privacy Policy</b></Agreement>
                <Button>CREATE</Button>
            </Wrapper>
        </Container>
    )
}

export default Register

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)), url("images/register_img.jpg");
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
`
const Wrapper = styled.div`
    width: 40%;
    padding: 20px;
    background-color: white;
    ${mobile({width: "80%"})}
`
const Title = styled.h2`
    font-size: 24px;
    font-weight: 300;
`
const Form = styled.form`
    display: flex;
    flex-wrap: wrap;
`
const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 20px 10px 0 0;
    padding: 10px;
`
const Agreement = styled.p`
    font-size: 12px;
    margin: 20px 0;
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