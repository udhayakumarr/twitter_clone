import { useState, useRef } from "react";
import styled from "styled-components";
import Picker from "emoji-picker-react";

import IconButton from "../../../IconButton";
import EmojiIcon from '../../../../assets/uploadEmoji.svg'
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
      <IconButton onClick={handleEmojiIconClick} alt="AddEmoji" src={EmojiIcon} />
      {showEmojiPicker && (
        <Div ref={ref}>
          <Picker onEmojiClick={onEmojiClick} />{" "}
        </Div>
      )}
    </div>
  );
}

export default UploadEmoji;
