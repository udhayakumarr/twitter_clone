import styled from "styled-components";

import Navbar from "./Components/NavBar";
import Main from "./Components/Main"

const Container = styled.div`
  display: flex;
  margin: 0px 130px;
`;

function App() {
  return (
    <Container>
      <Navbar />
      <Main />
      {/* <Feed /> */}
    </Container>
  );
}

export default App;
