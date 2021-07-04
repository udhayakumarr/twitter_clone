import ClearIcon from "@material-ui/icons/Clear";
import styled from "styled-components";

const Button = styled.button`
  cursor: pointer;
  border: 0;
  outline: none;
  background-color: rgba(0, 0, 0, 0.77);
  position: absolute;
  height: 28px;
  width: 28px;
  top: 4px;
  left: 4px;
  border-radius: 50%;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
}
`;

const ImageContainer = styled.div`
  width: 100%;
  font-size: 15px;
  position: relative;
  border-radius: 10px;
  overflow: hidden;
  outline-style: none;
  padding-top: 56.25%;
  min-width: 240px;
`;

const Image = styled.img`
  transform: translate(-50%, -50%);
  left: 50%;
  top: 50%;
  width: 100%;
  display: block;
  position: absolute;
`;

const Icon = styled(ClearIcon)`
  fill: #f6f6f6 !important;
`;

const Div = styled.div`
  display: flex;
  maxwidth: 100%;
  margintop: 20;
`;

function PreviewImage({ removeImage, image }) {
  if (!image) {
    return null;
  }

  return (
    <Div>
      <ImageContainer>
        {removeImage && (
          <Button onClick={removeImage}>
            <Icon />
          </Button>
        )}
        <Image src={image} alt="uploadImage" width="500px" height="500px" />
      </ImageContainer>
    </Div>
  );
}

export default PreviewImage;
