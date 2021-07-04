import styled from "styled-components";

const Button = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  cursor: pointer;
  &:hover {
    background: rgba(29, 161, 242, 0.1);
  }
`;
function IconButton({ alt, onClick, src }) {

  return (
    <Button onClick={onClick}>
       <img alt={alt} src={src} />
    </Button>
  );
}

export default IconButton;
