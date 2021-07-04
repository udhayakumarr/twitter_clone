import styled from "styled-components";

import ListItem from './ListItem'


const List = styled.ul`
  padding: 0;
  margin: 0;
  border: 1px solid #ebeef0;
`;

function TweetList({ tweets }) {
  return (
    <div>
    <List>
      {tweets?.map((tweet) => {
        return (
          <ListItem key={tweet.id} tweet={tweet}/>
        );
      })}
    </List>
    </div>
  );
}

export default TweetList;
