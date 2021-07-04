import styled from "styled-components";

import AvatarConatiner from "../AvatarContainer";
import PreviewImage from "../PreviewImage";

const Item = styled.li`
  list-style-type: none;
  padding: 10px 15px;
  border-bottom: 1px solid #eff3f4;
  border-top: 1px solid #eff3f4;
`;

const Flex = styled.div`
  display: flex;
`;

const Box = styled.div`
  padding-left: 10px;
  width: calc(100% - 40px);
`;

function ListItem({ tweet }) {
  return (
    <Item>
      <Flex>
        <AvatarConatiner url={tweet.user.avatarUrl} />
        <Box>
          <Flex>
            <span style={{ color: "#0f1419", fontWeight: 700 }}>
              {tweet.user.name}
            </span>
            <span style={{ paddingLeft: 10 }}>{tweet.user.tagName}</span>
            <span style={{ paddingLeft: 10 }}>20h</span>
          </Flex>

          <div>{tweet.message}</div>
          <PreviewImage image={tweet.image} />
        </Box>
      </Flex>
    </Item>
  );
}

export default ListItem;
