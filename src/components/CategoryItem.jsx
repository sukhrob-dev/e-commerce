import styled from 'styled-components';

const CategoryItem = ({item}) => {
    return (
        <Container>
            <Image src={item.img} />
            <Info>
                <Title>{item.title}</Title>
                <Button>SHOP NOW</Button>
            </Info>
        </Container>
    )
}

export default CategoryItem

const Container = styled.div`
    height: 70vh;
    flex: 1;
    margin: 3px;
    position: relative;
`

const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: top;
`

const Info = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    height: 100%;
`

const Title = styled.h2`
    margin-bottom: 20px;
    color: #fff;
    text-shadow: 0 0 5px #333;
`

const Button = styled.button`
    outline: none;
    border: none;
    color: #333;
    background-color: #fff;
    padding: 7px 12px;
    cursor: pointer;
`