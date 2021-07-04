import IconButton from "../../../IconButton";
import CropOriginalIcon from "@material-ui/icons/CropOriginal";

function UploadImage({ setImage }) {
  return (
    <label htmlFor="upload-button">
      <IconButton icon={CropOriginalIcon} />
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
