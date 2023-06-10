import styled from "styled-components";

import headerImgMobile from '../../assets/images/art-1-mobile.jpg';
import artImg1 from '../../assets/images/art-2-mobile.jpg';
import artImg2 from '../../assets/images/art-3-mobile.jpg';


const Middle = () => {
    return (
        <Container>
            <FirstSection>
                <ImageHeader>
                    {/* Image Goes Here */}
                </ImageHeader>

                <Info>
                    <Title>
                        Your day at the gallery
                    </Title>

                    <Subtitle>
                        Wander through our distinct
                        collections and find new insights about
                        our artists. Dive into the details
                        of their creative process.
                    </Subtitle>
                </Info>

            </FirstSection>

            <ArtDisplaySection>
                <ArtOne
                    src={artImg1}
                    alt="Art display"
                />

                <ArtTwo
                    src={artImg2}
                    alt="Art display"
                />

                <InfoBox>
                    <InfoBoxTitle>
                        Come & be inspired
                    </InfoBoxTitle>

                    We’re excited to welcome you to our
                    gallery and see how our collections
                    influence you.
                </InfoBox>
            </ArtDisplaySection>
        </Container >
    );
};

export default Middle;


const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 80px;
    margin-bottom: 35px;
    padding: 10px 20px;
    padding-bottom: 80px;

    @media (min-width: 450px) {
        padding: 10px 12vw;
    }

    @media (min-width: 768px) {
        padding: 10px 5vw;
        margin-bottom: 50px;
    }

    @media (min-width: 1024px) {
        padding: 10px 14vw;
        margin-top: 140px;
        margin-bottom: 80px;
    }
`;

const FirstSection = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    width: 100%;

    @media (min-width: 768px) {
        flex-direction: row-reverse;
        align-items: stretch;
    }
`;

const ImageHeader = styled.div`
    width: 100%;
    height: 320px;
    background-image: url(${headerImgMobile});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    margin-bottom: 30px;

    @media (min-width: 1024px) {
        max-width: 600px;
    }
`;


const Info = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 45px;

    @media (min-width: 768px) {
        align-items: flex-start;
        margin-right: 45px;
    }

    @media (min-width: 1024px) {
        align-items: center;
        justify-content: center;
    }
`;

const Title = styled.div`
    font-size: 50px;
    font-weight: black;
    font-family: ${props => props.theme.fontBold}, "cursive";
    line-height: 45px;
    color: ${props => props.theme.almostBlack};
    text-transform: uppercase;
    margin-bottom: 40px;

    @media (min-width: 768px) {
        max-width: 250px;
    }
`;

const Subtitle = styled.div`
    font-size: 18px;
    font-weight: 300;
    line-height: 28px;
    font-family: ${props => props.theme.fontLight}, "sans-serif";
    color: ${props => props.theme.darkGray};
    max-width: 332px;
`;

const ArtDisplaySection = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 720px;

    @media (min-width: 768px) {
        display: grid;
        grid-template-columns: 1.7fr 1fr;
        align-items: stretch;
        grid-gap: 10px;
    }
`;

const ArtOne = styled.img`
    width: 100%;
    margin-bottom: 20px;

    @media (min-width: 768px) {
        grid-column: 1;
        grid-row: span 2;
        height: 100%;
        max-height: 720px;
    }
`;

const ArtTwo = styled.img`
    width: 100%;
    margin-bottom: 20px;

    @media (min-width: 768px) {
        grid-column: 2;
        grid-row: 1;
        margin-bottom: 0;
    }
`;

const InfoBox = styled.div`
    background-color: ${props => props.theme.almostBlack};
    font-size: 18px;
    font-weight: light;
    color: ${props => props.theme.white};
    font-family: ${props => props.theme.fontLight}, "sans-serif";
    padding: 50px 20px;

    @media (min-width: 768px) {
        grid-column: 2;
        grid-row: 2;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    @media (min-width: 1024px) {
        padding: 70px 40px;
    }
`;

const InfoBoxTitle = styled.div`
    font-size: 50px;
    font-weight: black;
    font-family: ${props => props.theme.fontBold}, "cursive";
    text-transform: uppercase;
    margin-bottom: 20px;
`;