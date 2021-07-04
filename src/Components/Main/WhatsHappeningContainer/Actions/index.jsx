import GifIcon from "@material-ui/icons/Gif";
import PollOutlinedIcon from "@material-ui/icons/PollOutlined";
import ScheduleIcon from "@material-ui/icons/Schedule";

import Button from "../../../CommonStyles/Button";
import FlexGrow from "../../../CommonStyles/FlexGrow";
import IconButton from "../../../IconButton";
import UploadImage from "./UploadImage";
import UploadEmoji from "./uploadEmoji";

function Actions({ setImage, isDisabled, appendEmojiToMessage, handleOnTweet }) {
  return (
    <div style={{ marginTop: 30, display: "flex", alignItems: "center" }}>
      <UploadImage setImage={setImage} />
      <IconButton icon={GifIcon} />
      <IconButton icon={PollOutlinedIcon} />
      <IconButton icon={ScheduleIcon} />
      <UploadEmoji appendEmojiToMessage={appendEmojiToMessage} />
      <FlexGrow />
      <Button onClick={handleOnTweet} disabled={!isDisabled} padding="12px 20px">
        Tweet
      </Button>
    </div>
  );
}

export default Actions;
