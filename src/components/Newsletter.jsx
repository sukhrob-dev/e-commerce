import { Send } from '@material-ui/icons';
import styled from 'styled-components';
import { mobile } from '../responsive';

const Newsletter = () => {
    return (
        <Container>
            <Title>Newsletter</Title>
            <Description>Get timely updates from your favourite products</Description>
            <InputContainer>
                <Input placeholder='Your Email' />
                <Button>
                    <Send />
                </Button>
            </InputContainer>
        </Container>
    )
}

export default Newsletter

const Container = styled.div`
    height: 60vh;
    background-color: #fcf5f5;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

const Title = styled.h2`
    font-size: 70px;
    margin-bottom: 20px;
    ${mobile({fontSize: "40px"})}
`

const Description = styled.div`
    font-size: 24px;
    font-weight: 300;
    margin-bottom: 20px;
    ${mobile({textAlign: "center", fontSize: "16px"})}
`

const InputContainer = styled.div`
    width: 50%;
    height: 40px;
    background-color: #fff;
    display: flex;
    justify-content: space-between;
    border: 1px solid lightgray;
    ${mobile({width: "80%"})}
`

const Input = styled.input`
    flex: 9;
    border: none;
    padding-left: 20px;
`

const Button = styled.button`
    flex: 1;
    border: none;
    background-color: teal;
    color: white;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
`