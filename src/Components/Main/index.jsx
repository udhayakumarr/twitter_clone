import { useEffect, useState } from "react";
import styled from "styled-components";

import HeaderContainer from "./HeaderContainer";
import WhatsHappeningContainer from "./WhatsHappeningContainer";
import TweetList from "./TweetList";

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
  const [tweets, setTweets] = useState([]);

  useEffect(() => {
    const fetchTweets = async () => {
      const response = await fetch(
        "http://localhost:8000/tweets?_sort=id&_order=desc"
      );
      const data = await response.json();
      setTweets(data);
    };

    fetchTweets();
  }, []);

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
        name: "udhay kumar",
        avatarUrl: image,
        tagName: `@udhaya`,
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
        setTweets(tweets);
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

      <TweetList tweets={tweets} />
    </Container>
  );
}

export default Body;
