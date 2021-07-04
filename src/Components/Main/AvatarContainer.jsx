import styled from "styled-components";
import { Avatar } from "@material-ui/core";
import FlexGrow from "../CommonStyles/FlexGrow";

const Div = styled.div`
  display: flex;
`;

function AvatarConatiner({ url }) {
  return (
    <Div>
      <Avatar alt="profile" src={url} />
      <FlexGrow></FlexGrow>
    </Div>
  );
}

export default AvatarConatiner;
