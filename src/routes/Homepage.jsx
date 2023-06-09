import styled from "styled-components";

//Importing homepage sections
import Hero from "../components/homepage-components/Hero";

const Homepage = () => {
    return (
        <Container>
            <Hero />
        </Container>
    );
}

export default Homepage;

const Container = styled.div`
`;