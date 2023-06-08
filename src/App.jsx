import { 
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";
import styled from "styled-components";


//Importing Routes
import Homepage from "./routes/Homepage";



const App = () => {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Homepage />,
      //errorElement: <Error />
    },
  ])

  return (
    <Container>
      <RouterProvider router={router} />
    </Container>
  );
}

export default App;

const Container = styled.div``;