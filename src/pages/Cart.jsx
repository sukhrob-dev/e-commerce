import { Add, Remove } from "@material-ui/icons";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { mobile } from "../responsive";

const Cart = () => {
    return (
        <Container>
            <Announcement />
            <Navbar />
            <Wrapper>
                <Title>Your Bag</Title>
                <Top>
                    <TopButton >CONTINUE SHOPPING</TopButton>
                    <TopTexts>
                        <TopText>Shopping Bag (2)</TopText>
                        <TopText>Your Wishlist (0)</TopText>
                    </TopTexts>
                    <TopButton type="filled">CHECKOUT NOW</TopButton>
                </Top>
                <Bottom>
                    <Info>
                        <Product>
                            <ProductDetail>
                                <Image src="images/shoes.png" />
                                <Details>
                                    <ProductName><b>Product:</b> JESSIE THUNDER SHOES</ProductName>
                                    <ProductId><b>ID:</b> 5487656447</ProductId>
                                    <ProductColor color="aqua" />
                                    <ProductSize><b>Size:</b> 42</ProductSize>
                                </Details>
                            </ProductDetail>
                            <PriceDetail>
                                <ProductAmountContainer>
                                    <Remove />
                                    <ProductAmount>2</ProductAmount>
                                    <Add />
                                </ProductAmountContainer>
                                <ProductPrice>$ 49.99</ProductPrice>
                            </PriceDetail>
                        </Product>
                        <Hr />
                        <Product>
                            <ProductDetail>
                                <Image src="images/shoes1.png" />
                                <Details>
                                    <ProductName><b>Product:</b> JORDAN PRO SHOES</ProductName>
                                    <ProductId><b>ID:</b> 12234465485</ProductId>
                                    <ProductColor color="black" />
                                    <ProductSize><b>Size:</b> 41</ProductSize>
                                </Details>
                            </ProductDetail>
                            <PriceDetail>
                                <ProductAmountContainer>
                                    <Remove />
                                    <ProductAmount>1</ProductAmount>
                                    <Add />
                                </ProductAmountContainer>
                                <ProductPrice>$ 69.99</ProductPrice>
                            </PriceDetail>
                        </Product>
                    </Info>
                    <Summary>
                        <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                        <SummaryItem>
                            <SummaryItemText>Subtotal</SummaryItemText>
                            <SummaryItemPrice>$ 118.99</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>Estimated Shipping</SummaryItemText>
                            <SummaryItemPrice>$ 5.99</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>Shipping Discount</SummaryItemText>
                            <SummaryItemPrice>$ -5.99</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem type="total">
                            <SummaryItemText>Total</SummaryItemText>
                            <SummaryItemPrice>$ 118.99</SummaryItemPrice>
                        </SummaryItem>
                        <TopButton type="filled" width="full">CHECKOUT NOW</TopButton>
                    </Summary>
                </Bottom>
            </Wrapper>
            <Footer />
        </Container>
    )
}

export default Cart

const Container = styled.div``

const Wrapper = styled.div`
    padding: 20px;
`

const Title = styled.h2`
    font-weight: 300;
    text-align: center;
`

const Top = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
`

const TopButton = styled.button`
    padding: 10px;
    font-weight: 600;
    cursor: pointer;
    border: ${props => props.type === "filled" ? "1px solid black" : "2px solid teal"};
    background-color: ${props => props.type === "filled" ? "black" : "transparent"};
    color: ${props => props.type === "filled" ? "white": "teal"};
    width: ${props => props.width === "full" && "100%"};
    transition: all 0.2s ease;

    &:hover {
    border: ${props => props.type === "filled" ? "1px solid black" : "2px solid teal"};
    background-color: ${props => props.type === "filled" ? "white" : "teal"};
    color: ${props => props.type === "filled" ? "black": "white"};
    width: ${props => props.width === "full" && "100%"};
    }
    ${mobile({padding: "5px", fontSize: "12px"})}
`

const Bottom = styled.div`
    display: flex;
    justify-content: space-between;
    ${mobile({flexDirection: "column"})}
`

const TopTexts = styled.div``

const TopText = styled.span`
    text-decoration: underline;
    margin: 0 10px;
    ${mobile({display: "none"})}
`

const Info = styled.div`
    flex: 3;
`

const Product = styled.div`
    display: flex;
    justify-content: space-between;
    ${mobile({flexDirection: "column"})}
`

const ProductDetail = styled.div`
    flex: 2;
    display: flex;
`

const Image = styled.img`
    width: 200px;
`

const Details = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    ${mobile({fontSize: "12px"})}
    justify-content: space-around;
`

const ProductName = styled.span``

const ProductId = styled.span``

const ProductColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${props => props.color};
    border: 2px solid white;
    outline: 1px solid ${props => props.color};
`

const ProductSize = styled.span``

const PriceDetail = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`

const ProductAmountContainer = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
`

const ProductAmount = styled.span`
    font-size: 24px;
    margin: 5px;
`

const ProductPrice = styled.span`
    font-size: 30px;
    font-weight: 200;
`

const Hr = styled.hr`
    border: none;
    background-color: #ccc;
    height: 1px;
`

const Summary = styled.div`
    flex: 1;
    border: 0.5px solid lightgray;
    border-radius: 10px;
    padding: 20px;
`

const SummaryTitle = styled.h3`
    font-weight: 200;
    font-size: 32px;
`

const SummaryItem = styled.div`
    margin: 30px 0;
    font-weight: ${props => props.type === "total" && "600"};
    font-size: ${props => props.type === "total" && "20px"};
`

const SummaryItemText = styled.p``

const SummaryItemPrice = styled.p``