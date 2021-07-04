import styled from "styled-components";

const Button = styled.button`
  background-color: #1da1f2;
  padding: ${({ padding }) => padding};
  opacity: ${({ disabled }) => (disabled ? "0.5" : "1")};
  border: 0;
  border-radius: 30px;
  color: #ffffff;
  font-weight: 600;
  cursor: pointer;
`;

export default Button;
