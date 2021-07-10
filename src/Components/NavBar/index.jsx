import styled from "styled-components";
import TwitterIcon from "@material-ui/icons/Twitter";

import FlexGrow from "../CommonStyles/FlexGrow";
import Button from "../CommonStyles/Button";
import Nav from "./Nav";
import UserProfile from "./UserProfile";

const Container = styled.div`
  flex: 0.2;
  padding-right: 10px;
`;

const Twiiter = styled(TwitterIcon)`
  font-size: 2rem !important;
  fill: #1da1f2 !important;
`;

const Div = styled.div`
  margin-top: 5px;
  margin-left: 15px;
`;

const Sticky = styled.div`
  position: sticky;
  top: 5px;
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

export default function NavBar() {
  return (
    <Container>
      <Sticky>
        <Div>
          <Twiiter />
        </Div>
        <Nav />
        <Button padding="15px 70px">Tweet</Button>
        <FlexGrow />
        <UserProfile />
      </Sticky>
    </Container>
  );
}
