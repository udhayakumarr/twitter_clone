import TextareaAutosize from "react-textarea-autosize";
import styled from "styled-components";


const Textarea = styled(TextareaAutosize)`
  width: 100%;
  font-size: 1rem;
  resize: none;
  outline: none;
  resize: none;
  border: 0;
  margin-left: 12px;
  font-family: inherit;
  ::placeholder {
    font-size: 1rem;
    font-family: inherit;
  }
`;

function TweetMessage({ message, setMessage }) {
  return (
    <Textarea
      placeholder="What's happening?"
      spellCheck={false}
      value={message}
      onChange={(event) => setMessage(event.target.value)}
    />
  );
}

export default TweetMessage
