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
function IconButton({ icon, onClick }) {
  const Icon = icon;

  const Buttons = styled(Icon)`
    fill: #1da1f2 !important;
  `;

  return (
    <Button onClick={onClick}>
      <Buttons />
    </Button>
  );
}

export default IconButton;
