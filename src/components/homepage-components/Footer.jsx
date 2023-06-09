import styled from "styled-components";

//Icons Import
import IG from '../../assets/icons/instagram.svg';
import FB from '../../assets/icons/facebook.svg';
import TW from '../../assets/icons/twitter.svg';

const Footer = ({location}) => {
    return (
        <Container location={location}>
            <Title location={location}>
                <Word>Modern</Word>
                <Word>Art Gallery</Word>
            </Title>

            <Subtitle location={location}>
                The Modern Art Gallery is free to all
                visitors and open seven days a week
                from 8am to 9pm. Find us at 99
                King Street, Newport, USA.
            </Subtitle>

            <Icons>
                <Icon
                    src={FB}
                    alt="facebook logo"
                    location={location}
                />

                <Icon
                    src={IG}
                    alt="instagram logo"
                    location={location}
                />

                <Icon
                    src={TW}
                    alt="twitter logo"
                    location={location}
                />
            </Icons>
        </Container>
    );
}

export default Footer;

const Container = styled.footer`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    background-color: ${props => props.location ? props.theme.gold : props.theme.almostBlack};
    color: ${props => props.location ? props.theme.almostBlack : props.theme.white};
    padding: 50px 30px;

    @media (min-width: 768px) {
        flex-direction: row;
        padding: 50px 35px;
        align-items: flex-start;
        justify-content: space-between;
    }

    @media (min-width: 1024px) {
        padding: 70px 14vw;
    }
`;

const Title = styled.div`
    font-size: 30px;
    font-weight: black;
    font-family: ${props => props.theme.fontBold};
    margin-bottom: 25px;
    text-transform: uppercase;
    color: ${props => props.location ? props.theme.almostBlack : props.theme.white};
`;

const Word = styled.div`
    margin-bottom: -10px;
`;

const Subtitle = styled.div`
    font-size: 16px;
    font-weight: light;
    font-family: ${props => props.theme.fontLight};
    color: ${props => props.location ? props.theme.almostBlack : props.theme.white};
    opacity: 70%;
    line-height: 26px;
    margin-bottom: 25px;
    max-width: 350px;

    @media (min-width: 768px) {
        max-width: 280px;
    }

    @media (min-width: 1024px) {
        max-width: 430px;   
    }
`;

const Icons = styled.div`
    display: flex;
`;

const Icon = styled.img`
    margin: 0 10px;
    width: 20px;

    &:hover {
        cursor: pointer;
        filter: ${props => props.location ? "grayscale(100%)" : "invert(40%)"};
    }

    ${props => props.location && `
        filter: invert(100%);
    `}
`;