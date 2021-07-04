import UploadGIFIcon from "../../../../assets/uploadGIF.svg";
import UploadPollIcon from "../../../../assets/uploadPoll.svg";
import UploadScheduleIcon from "../../../../assets/uploadSchedule.svg";
import Button from "../../../CommonStyles/Button";
import FlexGrow from "../../../CommonStyles/FlexGrow";
import IconButton from "../../../IconButton";
import UploadImage from "./UploadImage";
import UploadEmoji from "./uploadEmoji";

function Actions({
  setImage,
  isDisabled,
  appendEmojiToMessage,
  handleOnTweet,
}) {
  return (
    <div style={{ marginTop: 30, display: "flex", alignItems: "center" }}>
      <UploadImage setImage={setImage} />
      <IconButton alt="Upload GIF" src={UploadGIFIcon} />
      <IconButton alt="Upload Poll" src={UploadPollIcon} />
      <UploadEmoji appendEmojiToMessage={appendEmojiToMessage} />
      <IconButton alt="Upload Schedule" src={UploadScheduleIcon} />
      <FlexGrow />
      <Button
        onClick={handleOnTweet}
        disabled={!isDisabled}
        padding="12px 20px"
      >
        Tweet
      </Button>
    </div>
  );
}

export default Actions;
