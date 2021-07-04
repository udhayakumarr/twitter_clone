import styled from "styled-components";
import StarOutlineIcon from "@material-ui/icons/StarOutline";

import FlexGrow from "../CommonStyles/FlexGrow";

export const Header = styled.header`
  border-bottom: 1px solid #ebeef0;
  height: 53px;
  display: flex;
  align-items: center;
  padding: 0px 10px;
  border: 1px solid #ebeef0;
  position: sticky;
  top: 0;
  background: #ffffff;
  z-index: 1000;
`;

export const HeaderText = styled.span`
  font-size: 20px;
  font-weight: 700;
  color: #0f1419;
`;

export const HeaderActionIcon = styled(StarOutlineIcon)`
  font-size: 1.5rem !important;
  fill: #1da1f2 !important;
`;

function HeaderContainer() {
  return (
    <Header>
      <HeaderText>Home</HeaderText>
      <FlexGrow />
      <HeaderActionIcon>Icon</HeaderActionIcon>
    </Header>
  );
}

export default HeaderContainer;
