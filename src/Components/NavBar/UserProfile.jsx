import styled from "styled-components";
import { Avatar } from "@material-ui/core";

import FlexGrow from "../CommonStyles/FlexGrow";
import KebabIcon from "../../assets/kebab.svg";

import { useUserProfile } from "../UserContext";

const Profile = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  padding: 12px;
  cursor: pointer;
  &:hover {
    background: rgba(29, 161, 242, 0.1);
    border-radius: 30px;
  }
`;

const Container = styled.div`
  margin-left: 12px;
  display: flex;
  flex: 1;
  align-items: center;
`;

const Flex = styled.div`
  display: flex;
  flex-direction: column;
`;

const UserName = styled.span`
  font-weight: 700;
  font-size: 15px;
  color: #0f1419;
`;

const UserTag = styled.span`
  color: #536471;
  font-weight: 400;
  font-size: 15;
`;

function UserProfile() {
  const { name, avatarUrl, tagName } = useUserProfile();
  return (
    <Profile>
      <div>
        <Avatar alt="profile" src={avatarUrl} />
      </div>

      <Container>
        <Flex>
          <UserName>{name}</UserName>
          <UserTag>{tagName}</UserTag>
        </Flex>
        <FlexGrow />
        <div>
          <img src={KebabIcon} alt="kebab" />
        </div>
      </Container>
    </Profile>
  );
}

export default UserProfile;
