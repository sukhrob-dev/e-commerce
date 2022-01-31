import { Facebook, Instagram, MailOutline, Phone, Pinterest, Room, Twitter } from "@material-ui/icons"
import styled from "styled-components"
import { mobile } from "../responsive"

const Footer = () => {
    return (
        <Container>
            <Left>
                <Logo>Sukhrob.</Logo>
                <Description>There are many variations of passages of Lorem ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believeable.</Description>
                <SocialContainer>
                    <SocialIcon color="3b5999">
                        <Facebook />
                    </SocialIcon>
                    <SocialIcon color="e4405f">
                        <Instagram />
                    </SocialIcon>
                    <SocialIcon color="55acee">
                        <Twitter />
                    </SocialIcon>
                    <SocialIcon color="e60023">
                        <Pinterest />
                    </SocialIcon>
                </SocialContainer>
            </Left>
            <Center>
                <Title>Useful Links</Title>
                <List>
                    <ListItem>Home</ListItem>
                    <ListItem>Cart</ListItem>
                    <ListItem>Man Fashion</ListItem>
                    <ListItem>Woman Fashion</ListItem>
                    <ListItem>Accessories</ListItem>
                    <ListItem>My Account</ListItem>
                    <ListItem>Order Tracking</ListItem>
                    <ListItem>Wishlist</ListItem>
                    <ListItem>Terms</ListItem>
                </List>
            </Center>
            <Right>
                <Title>Contacts</Title>
                <ContactItem><Room style={{marginRight: '10px'}} /> 622, Dixie Path, South Tobinchester 98336</ContactItem>
                <ContactItem><Phone style={{marginRight: '10px'}} /> +1 234 567 899</ContactItem>
                <ContactItem><MailOutline style={{marginRight: '10px'}} /> contact@sukhrob.dev</ContactItem>
                <Payment src="images/payment.png" />
            </Right>
        </Container>
    )
}

export default Footer

const Container = styled.footer`
    display: flex;
    ${mobile({flexDirection: "column", padding: "20px 0"})}
`

const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
`

const Logo = styled.h2`
    
`

const Description = styled.p`
    margin: 20px 0;
`

const SocialContainer = styled.div`
    display: flex;
`

const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 20px;
    background-color: #${props => props.color};
    cursor: pointer;
`

const Center = styled.div`
    flex: 1;
    padding: 20px;
`

const Title = styled.h3`
    margin-bottom: 30px;
`

const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`

const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
`

const Right = styled.div`
    flex: 1;
    padding: 20px;
`

const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
`

const Payment = styled.img`
    max-width: 100%;
`