import styled from "styled-components";

//Importing homepage sections
import Hero from "../components/homepage-components/Hero";
import Middle from "../components/homepage-components/Middle";

const Homepage = () => {
    return (
        <Container>
            <Hero />
            <Middle />
        </Container>
    );
}

export default Homepage;

const Container = styled.div`
`;