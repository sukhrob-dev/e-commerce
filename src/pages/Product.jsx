import { Add, Remove } from "@material-ui/icons"
import styled from "styled-components"
import Announcement from "../components/Announcement"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import Newsletter from "../components/Newsletter"
import { mobile } from "../responsive"

const Product = () => {
    return (
        <Container>
            <Announcement />
            <Navbar />
            <Wrapper>
                <ImgContainer>
                    <Image src="images/popular_3.png" />
                </ImgContainer>
                <InfoContainer>
                    <Title>Sport Jacket</Title>
                    <Description>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.</Description>
                    <Price>$ 18.99</Price>
                    <FilterContainer>
                        <Filter>
                            <FilterTitle>Color</FilterTitle>
                            <FilterColor color="black" />
                            <FilterColor color="darkblue" />
                            <FilterColor color="gray" />
                        </Filter>
                        <Filter>
                            <FilterTitle>Size</FilterTitle>
                            <FilterSize>
                                <FilterSizeOption>XS</FilterSizeOption>
                                <FilterSizeOption>S</FilterSizeOption>
                                <FilterSizeOption>M</FilterSizeOption>
                                <FilterSizeOption>L</FilterSizeOption>
                                <FilterSizeOption>XL</FilterSizeOption>
                            </FilterSize>
                        </Filter>
                    </FilterContainer>
                    <AddContainer>
                        <AmountContainer>
                            <Remove />
                            <Amount>1</Amount>
                            <Add />
                        </AmountContainer>
                        <Button>ADD TO CART</Button>
                    </AddContainer>
                </InfoContainer>
            </Wrapper>
            <Newsletter />
            <Footer />
        </Container>
    )
}

export default Product

const Container = styled.div`
    
`

const Wrapper = styled.div`
    padding: 50px;
    display: flex;
    ${mobile({padding: "20px", flexDirection: "column"})}
`

const ImgContainer = styled.div`
    flex: 1;
    ${mobile({display: "flex", justifyContent: "center", alignItems: "center"})}
`

const Image = styled.img`
    max-width: 100%;
    height: 90vh;
    object-fit: cover;
    ${mobile({height: "40vh"})}
`

const InfoContainer = styled.div`
    flex: 1;
    padding: 0 50px;
`

const Title = styled.h2`
    font-weight: 300;
`

const Description = styled.p`
    margin: 20px 0;
`

const Price = styled.span`
    font-size: 40px;
    font-weight: 200;
`
const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 50%;
    margin: 30px 0;
`

const Filter = styled.div`
    display: flex;
    align-items: center;
`

const FilterTitle = styled.span`
    font-size: 20px;
    font-weight: 200;
`

const FilterColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${props => props.color};
    margin: 0 5px;
    cursor: pointer;
    border: 1px solid #f5fcfd;
    outline: 1px solid #999;
`

const FilterSize = styled.select`
    padding: 5px;
    margin-left: 20px;
`

const FilterSizeOption = styled.option`
    
`

const AddContainer = styled.div`
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    ${mobile({width: "100%"})}
`

const AmountContainer = styled.div`
    display: flex;
    align-items: center;
    font-weight: 700;
`

const Amount = styled.span`
    width: 30px;
    height: 30px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid teal;
    margin: 0 5px;
`

const Button = styled.button`
    padding: 7px 12px;
    border: 1px solid teal;
    background-color: white;
    cursor: pointer;
    border-radius: 5px;
    color: teal;
    transition: all 0.2s ease;

    &:hover {
        background-color: teal;
        color: white;
    }
`