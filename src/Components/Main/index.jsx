import { useState } from "react";
import styled from "styled-components";

import HeaderContainer from "./HeaderContainer";
import WhatsHappeningContainer from "./WhatsHappeningContainer";
import TweetList from "./TweetList";
import { useUserProfile } from "../UserContext";
import useCustomFetch from "../Hooks/useCustomFetch";

const Container = styled.main`
  flex: 0.5;
`;

const Divider = styled.div`
  border-top-width: 1px;
  border-top-style: solid;
  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-top-color: rgb(239, 243, 244);
  border-bottom-color: rgb(239, 243, 244);
  background-color: rgb(247, 249, 249);
  height: 12px;
  border: 1px solid #ebeef0;
`;

function Body() {
  const [image, setImage] = useState();
  const [message, setMessage] = useState();
  const { name, avatarUrl, tagName } = useUserProfile();
  const {
    data: tweets,
    loading,
    error,
    refetch,
  } = useCustomFetch("tweets?_sort=id&_order=desc");

  const removeImage = () => {
    setImage("");
  };

  const appendEmojiToMessage = (emojiObj) => {
    const newMessage = `${message ? message : ""}${emojiObj.emoji}`;

    setMessage(newMessage);
  };

  const fileChangedHandler = (e) => {
    if (e && e.target.files.length) {
      setImage(URL.createObjectURL(e.target.files[0]));
    }
  };

  const handleOnTweet = () => {
    const data = {
      id: tweets.length + 1,
      user: {
        name: name,
        avatarUrl: avatarUrl,
        tagName: tagName,
      },
      message,
      image,
    };

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    };

    fetch("http://localhost:8000/tweets", requestOptions)
      .then((response) => response.json())
      .then((data) => {
        tweets.splice(0, 0, data);
        refetch();
        setImage("");
        setMessage("");
      });
  };

  return (
    <Container>
      <HeaderContainer />
      <WhatsHappeningContainer
        message={message}
        image={image}
        setMessage={setMessage}
        setImage={fileChangedHandler}
        removeImage={removeImage}
        appendEmojiToMessage={appendEmojiToMessage}
        handleOnTweet={handleOnTweet}
      />
      <Divider />

      <TweetList tweets={tweets} loading={loading} error={error}/>
    </Container>
  );
}

export default Body;
