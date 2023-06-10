import styled from "styled-components"
import map from '../assets/images/map-full.jpg';
import { Button } from "../components/homepage-components/Hero";
import Arrow from '../assets/icons/arrow.svg';
import Footer from "../components/homepage-components/Footer";

const Location = () => {
    return (
        <Container>
            <Map>
                <BackButton to="/">
                    Back To Home
                </BackButton>
            </Map>

            <OurLocation>
                <Title>
                    Our Location
                </Title>

                <StreetInfoContainer>
                    <Street>
                        99 King Street
                    </Street>

                    <InfoContainer>
                        <Info>
                            Newport
                        </Info>

                        <Info>
                            RI 02840
                        </Info>

                        <Info>
                            United States of America
                        </Info>
                    </InfoContainer>

                    <Description>
                        Our newly opened gallery is located
                        near the Edward King House on 99 King
                        Street, the Modern Art Gallery is free
                        to all visitors and open seven days a
                        week from 8am to 9pm.
                    </Description>
                </StreetInfoContainer>
            </OurLocation>

            <Footer location={true} />
        </Container>
    );
}

export default Location;

const Container = styled.div`
    display: flex;
    flex-direction: column;
`;

const Map = styled.div`
    width: 100%;
    height: 66vh;
    background-image: url(${map});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    position: relative;

    @media (min-width: 1024px) {
        height: 75vh;
    }
`;

const BackButton = styled(Button)`
    position: absolute;
    top: 0;
    left: 13.7%;

    @media (min-width: 1024px) {
        left: 15%;
    }

    &::after {
        display: none;
    }

    &::before {
        content: url(${Arrow});
        position: absolute;
        width: 25%;
        height: 100%;
        background-color: ${props => props.theme.gold};
        transform: rotate(180deg);
        top: 0;
        left: -25%;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: all .4s ease;
    }

    &:hover::before {
        background-color: ${props => props.theme.almostBlack};
    }
`;

const OurLocation = styled.div`
    background-color: ${props => props.theme.almostBlack};
    color: ${props => props.theme.white};
    font-family: ${props => props.theme.fontLight}, "sans-serif";
    font-size: 18px;
    font-weight: light;
    padding: 50px 15px;
    display: flex;
    flex-direction: column;

    @media (min-width: 768px) {
        flex-direction: row;
        justify-content: space-between;
        padding: 50px 35px;
    }

    @media (min-width: 1024px) {
        flex-direction: row;
        justify-content: space-between;
        padding: 50px 12vw;
    }
`;

const Title = styled.div`
    font-family: ${props => props.theme.fontBold}, "cursive";
    font-size: 50px;
    font-weight: black;
    margin-bottom: 40px;
    text-transform: uppercase;
    line-height: 50px;

    @media (min-width: 768px) {
        max-width: 200px;
        margin-bottom: 0;
    }
`;

const StreetInfoContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

const Street = styled.div`
    font-family: ${props => props.theme.fontBold}, "cursive";
    font-size: 32px;
    font-weight: black;
    color: ${props => props.theme.gold};
    margin-bottom: 30px;
    text-transform: uppercase;
`;

const InfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    margin-bottom: 20px;
`;

const Info = styled.div``;

const Description = styled.div`
    max-width: 320px;
    line-height: 28px;

    @media (min-width: 768px) {
        max-width: 400px;
    }

    @media (min-width: 1024px) {
        max-width: 440px;
    }
`;