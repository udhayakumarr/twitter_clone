import UploadImageIcon from "../../../../assets/uploadImage.svg";
import IconButton from "../../../IconButton";

function UploadImage({ setImage }) {
  return (
    <label htmlFor="upload-button">
      <IconButton alt="UploadImage" src={UploadImageIcon} />
      <input
        id="upload-button"
        type="file"
        style={{ display: "none" }}
        onChange={setImage}
        accept="image/x-png,image/jpeg"
      />
    </label>
  );
}

export default UploadImage;
