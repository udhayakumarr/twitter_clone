import styled from "styled-components";

import PreviewImage from "../PreviewImage";
import AvatarConatiner from "../AvatarContainer";
import TweetMessage from "./TweetMessage";
import Actions from "./Actions";
import { useUserProfile } from "../../UserContext";

const Container = styled.div`
  padding: 10px;
  display: flex;
  border: 1px solid #ebeef0;
`;

const TweetShare = styled.div`
  width: calc(100% - 59px);
  margin-top: 7px;
  margin-left: 7px;
`;

function WhatsHappeningContainer({
  image,
  message,
  setMessage,
  setImage,
  removeImage,
  appendEmojiToMessage,
  handleOnTweet,
}) {
  const { avatarUrl } = useUserProfile();
  return (
    <Container>
      <AvatarConatiner url={avatarUrl} />
      <TweetShare>
        <TweetMessage message={message} setMessage={setMessage} />
        <PreviewImage image={image} removeImage={removeImage} />
        <Actions
          isDisabled={Boolean(message || image)}
          setImage={setImage}
          appendEmojiToMessage={appendEmojiToMessage}
          handleOnTweet={handleOnTweet}
        />
      </TweetShare>
    </Container>
  );
}

export default WhatsHappeningContainer;
