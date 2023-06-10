import styled from 'styled-components';
import { Link } from 'react-router-dom';

import coverMobile from '../../assets/images/Rectangle.jpg';
import coverTablet from '../../assets/images/cover-tablet.jpg';
import coverDesktop from '../../assets/images/cover-desktop.jpg';
import Arrow from '../../assets/icons/arrow.svg';

const Hero = () => {
    return (
        <Container>
            {/* Design for Mobile and Tablet view */}
            <MobileView>
                <ImageContainer />

                <TextContainer>
                    <Title>
                        <TitleWord>
                            Modern
                        </TitleWord>
                        <TitleWord>
                            Art Gallery
                        </TitleWord>
                    </Title>

                    <InfoContainer>
                        <Subtitle>
                            The arts in the collection of the Modern Art Gallery all
                            started from a spark of inspiration. Will these pieces
                            inspire you? Visit us and find out.
                        </Subtitle>

                        <Button to="our-location">
                            Our Location
                        </Button>
                    </InfoContainer>
                </TextContainer>
            </MobileView>

            {/* Design for Desktop view */}
            <DesktopView>
                <TitleHalf rightHalf={false} leftHalf={true}>
                    <DesktopTitle leftHalf={true}>
                        <TitleWord>
                            Modern
                        </TitleWord>
                        <TitleWord>
                            Art Gallery
                        </TitleWord>
                    </DesktopTitle>
                </TitleHalf>

                <TitleHalf rightHalf={true} leftHalf={false}>
                    <DesktopTitle>
                        <TitleWord>
                            Modern
                        </TitleWord>
                        <TitleWord>
                            Art Gallery
                        </TitleWord>
                    </DesktopTitle>
                </TitleHalf>

                <DesktopInfo>
                    <DesktopSubtitle>
                        The arts in the collection of the Modern Art Gallery all
                        started from a spark of inspiration. Will these pieces
                        inspire you? Visit us and find out.
                    </DesktopSubtitle>

                    <DesktopButton to="our-location">
                        Our Location
                    </DesktopButton>
                </DesktopInfo>
            </DesktopView>
        </Container>
    );
}

export default Hero;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    margin-bottom: 80px;

    //Tablet Design

    @media (min-width: 768px) {
        display: flex;
        align-items: flex-end;
        justify-content: center;
    }
`;

//Styles for Mobile and Tablet Mode:

const MobileView = styled.div`
    width: 100%;
    height: 700px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;

    @media (min-width: 768px) {
        display: flex;
        align-items: flex-end;
        justify-content: center;
    }

    @media (min-width: 1024px) {
        display: none;
    }
`;


const ImageContainer = styled.div`
    width: 100%;
    height: 240px;
    background-image: url(${coverMobile});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;

    @media (min-width: 768px) {
        width: 55%;
        height: 700px;
        position: absolute;
        top: 0;
        left: 0;

        background-image: url(${coverTablet});
    }
`;

const TextContainer = styled.div`
    padding: 10px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    margin-top: 25px;

    @media (min-width: 768px) {
        width: 52%;
        z-index: 2;
        padding-top: 75px;
    }

    @media (min-width: 1024px) {
        flex-direction: row;   
    }
`;

const Title = styled.div`
    font-size: 60px;
    font-weight: black;
    color: black;
    margin-bottom: 40px;
    font-family: ${props => props.theme.fontBold}, cursive;

    @media (min-width: 768px) {
        font-size: 70px;
    }
`;

//Used to separate the title into two parts
const TitleWord = styled.div``;

const InfoContainer = styled.div`

`;

const Subtitle = styled.div`
    font-size: 18px;
    font-weight: light;
    color: ${props => props.theme.darkGray};
    margin-bottom: 40px;
    font-family: ${props => props.theme.fontLight}, sans-serif;
    max-width: 343px;
`;

export const Button = styled(Link)`
    background-color: ${props => props.theme.almostBlack};
    color: ${props => props.theme.white};
    font-size: 20px;
    font-weight: extrabold;
    letter-spacing: 3.64px;
    text-transform: uppercase;
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    border: none;
    color: ${props => props.theme.white};
    width: 204px;
    height: 72px;
    position: relative;
    cursor: pointer;
    font-family: ${props => props.theme.fontBold}, cursive;
    transition: all .4s ease;


    @media (max-width: 355px) {
        width: 65vw;
    }

    &::after {
            content: url(${Arrow});
            position: absolute;
            width: 25%;
            height: 100%;
            background-color: ${props => props.theme.gold};
            top: 0;
            right: -25%;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: all .4s ease;
        }

    &:hover::after {
        background-color: ${props => props.theme.almostBlack};
    }

    &:hover {
        background-color: ${props => props.theme.gold};
    }
`;


const DesktopView = styled.div`
    display: none;

    @media (min-width: 1024px) {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        width: 100%;
        max-width: 1440px;
        height: 799px;
        position: relative;
        overflow-x: hidden;
    }
`;

const TitleHalf = styled.div`
    height: 799px;
    overflow: hidden;
    position: absolute;
    padding-top: 22vh;

    ${props => props.leftHalf && `
        background-color: ${props.theme.almostBlack};
        z-index: 2;
        width: 32.9%;

        @media (max-width: 1240px) {
            width: 22%;
        }
    `}

    ${props => props.rightHalf && `
        width: auto;
        min-width: 100vw;
        background-image: url(${coverDesktop});
        background-size: auto 100%;
        background-repeat: no-repeat;
        background-position: 32vw 0;

        @media (max-width: 1240px) {
            background-position: 21vw 0;
        }
    `}
`;

const DesktopTitle = styled.div`
    font-family: ${props => props.theme.fontBold}, cursive;
    font-size: 96px;
    font-weight: 900;
    width: 50vw;
    margin-left: 13vw;
    color: #000;
    text-transform: uppercase;
    line-height: 88px;

    @media (max-width: 1240px) {
        margin-left: 4vw;
    }

    ${props => props.leftHalf && `
        color: ${props.theme.white};
    `}
`;

const DesktopInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    z-index: 99;
    position: absolute;
    top: 22vh;
    right:10.8vw;
`;

const DesktopSubtitle = styled.div`
    font-size: 22px;
    font-weight: 300;
    line-height: 33px;
    font-family: ${props => props.theme.fontLight}, sans-serif;
    max-width: 350px;
    margin-bottom: 70px;
`;

const DesktopButton = styled(Button)``;
