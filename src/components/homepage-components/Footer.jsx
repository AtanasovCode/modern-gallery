import styled from "styled-components";

//Icons Import
import IG from '../../assets/icons/instagram.svg';
import FB from '../../assets/icons/facebook.svg';
import TW from '../../assets/icons/twitter.svg';

const Footer = () => {
    return (
        <Container>
            <Title>
                <Word>Modern</Word>
                <Word>Art Gallery</Word>
            </Title>

            <Subtitle>
                The Modern Art Gallery is free to all
                visitors and open seven days a week
                from 8am to 9pm. Find us at 99
                King Street, Newport, USA.
            </Subtitle>

            <Icons>
                <Icon
                    src={FB}
                />

                <Icon
                    src={IG}
                />

                <Icon
                    src={TW}
                />
            </Icons>
        </Container>
    );
}

export default Footer;

const Container = styled.footer`
    margin-top: 80px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    background-color: ${props => props.theme.almostBlack};
    color: ${props => props.theme.white};
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
    font-size: 40px;
    font-weight: black;
    font-family: ${props => props.theme.fontBold};
    margin-bottom: 25px;
    text-transform: uppercase;

    @media (min-width: 768px) {
        font-size: 30px;
    }
`;

const Word = styled.div`
    margin-bottom: -10px;
`;

const Subtitle = styled.div`
    font-size: 16px;
    font-weight: light;
    font-family: ${props => props.theme.fontLight};
    color: ${props => props.theme.white};
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
        filter: invert(40%);
    }
`;