import { useState, useRef } from "react";
import styled from "styled-components";
import Picker from "emoji-picker-react";
import SentimentSatisfiedIcon from "@material-ui/icons/SentimentSatisfied";

import IconButton from "../../../IconButton";
import useOnClickOutside from "../../../Hooks/useOnClickOutside";

const Div = styled.div`
  position: absolute;
  z-index: 9999;
`;

function UploadEmoji({ appendEmojiToMessage }) {
  const ref = useRef();
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);

  useOnClickOutside(ref, () => setShowEmojiPicker(false));

  const handleEmojiIconClick = () => {
    setShowEmojiPicker(!showEmojiPicker);
  };

  const onEmojiClick = (_, emojiObject) => {
    appendEmojiToMessage(emojiObject);
  };
  return (
    <div>
      <IconButton
        icon={SentimentSatisfiedIcon}
        onClick={handleEmojiIconClick}
      />
      {showEmojiPicker && (
        <Div ref={ref}>
          <Picker onEmojiClick={onEmojiClick} />{" "}
        </Div>
      )}
    </div>
  );
}

export default UploadEmoji;
