import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";
import styled from "styled-components";
import { ThemeProvider } from "styled-components";


//Importing Routes
import Homepage from "./routes/Homepage";
import Location from "./routes/Location";



const App = () => {

  const theme = {
    almostBlack: "#151515",
    white: "#FFFFFF",
    gold: "#D5966C",
    darkGray: "#444444",

    fontBold: "Big Shoulders Display",
    fontLight: "Outfit"
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Homepage />,
      //errorElement: <Error />
    },
    {
      path: "/our-location",
      element: <Location />
    }
  ])

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <RouterProvider router={router} />
      </Container>
    </ThemeProvider>
  );
}

export default App;

const Container = styled.div`
`;