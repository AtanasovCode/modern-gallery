import styled from "styled-components";

//Importing homepage sections
import Hero from "../components/homepage-components/Hero";
import Middle from "../components/homepage-components/Middle";
import Footer from "../components/homepage-components/Footer";

const Homepage = () => {
    return (
        <Container>
            <Hero />
            <Middle />
            <Footer />
        </Container>
    );
}

export default Homepage;

const Container = styled.div`
`;