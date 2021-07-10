import styled from "styled-components";

import UserContext from "./Components/UserContext";
import Navbar from "./Components/NavBar";
import Main from "./Components/Main";

const Container = styled.div`
  display: flex;
  margin: 0px 130px;
`;

function App() {
  return (
    <UserContext>
      <Container>
        <Navbar />
        <Main />
        {/* <Feed /> */}
      </Container>
    </UserContext>
  );
}

export default App;
