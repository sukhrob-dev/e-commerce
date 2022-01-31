import { ArrowLeftOutlined, ArrowRightOutlined } from '@material-ui/icons';
import React, { useState } from 'react';
import styled from 'styled-components';
import { sliderItems } from '../data';
import { mobile } from '../responsive';

const Slider = () => {
    const [slideIndex, setSlideIndex] = useState(0);

    const handleClick = (direction) => {
        if (direction === "left") {
            setSlideIndex(slideIndex > 0 ? (slideIndex - 1) : (2))
            console.log(slideIndex)
        } else {
            setSlideIndex(slideIndex < 2 ? (slideIndex + 1) : 0)
        }
    }

    return (
        <Container>
            <Arrow direction="left" onClick={() => handleClick("left")}>
                <ArrowLeftOutlined />
            </Arrow>
            <Wrapper slideIndex={slideIndex}>
                {sliderItems.map(item => (
                    <Slide bg={item.bg} key={item.id}>
                        <ImgContainer>
                            <Image src={item.img} />
                        </ImgContainer>
                        <InfoContainer>
                            <Title>{item.title}</Title>
                            <Desc>{item.description}</Desc>
                            <Button>SHOP NOW</Button>
                        </InfoContainer>
                    </Slide>
                ))}
            </Wrapper>
            <Arrow direction="right" onClick={() => handleClick("right")}>
                <ArrowRightOutlined />
            </Arrow>
        </Container>
    )
}

export default Slider

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    position: relative;
    overflow: hidden;
`

const Arrow = styled.div`
    width: 50px;
    height: 50px;
    background-color: #fff7f7;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto;
    left: ${props => props.direction === "left" && "10px"};
    right: ${props => props.direction === "right" && "10px"};
    cursor: pointer;
    opacity: 0.5;
    z-index: 2;
`

const Wrapper = styled.div`
    height: 100%;
    display: flex;
    transition: all 1.5s ease-in-out;
    transform: translateX(${props => (props.slideIndex * (-100))}vw);
`

const Slide = styled.div`
    display: flex;
    align-items: center;
    width: 100vw;
    height: 100vh;
    background-color: #${props => props.bg};
    ${mobile({flexDirection: "column"})}
`;

const ImgContainer = styled.div`
    flex: 1;
    height: 100%;
`;

const Image = styled.img`
    height: 80%;
    ${mobile({height: "300px", width: "300px", objectFit: "cover", objectPosition: "top"})}
`

const InfoContainer = styled.div`
    flex: 1;
    padding: 50px;
`;

const Title = styled.h2`
    font-size: 70px;
    ${mobile({fontSize: "20px"})}
`

const Desc = styled.p`
    margin: 50px 0;
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 3px;
    ${mobile({fontSize: "12px", margin: "10px 0"})}
`

const Button = styled.button`
    padding: 7px 18px;
    font-size: 20px;
    background-color: transparent;
    cursor: pointer;
    outline: none;
    border: 1px solid black;
    border-radius: 20px;
    ${mobile({padding: "4px 10px", fontSize: "12px"})}
`