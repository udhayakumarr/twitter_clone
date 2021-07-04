import styled from "styled-components";
import options from "./options";

const NavItem = styled.nav`
  display: flex;
  flex-direction: column;
  margin: 8px 0px;
`;

const Link = styled.a`
  text-decoration: none;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
`;

const Div = styled.div`
  padding: 12px;
  display: inline-flex;
  &:hover {
    background: rgba(29, 161, 242, 0.1);
    border-radius: 30px;
  }
`;

const LinkText = styled.span`
  margin-left: 20px;
  margin-right: 16px;
  font-size: 20px;
  font-weight: 700;
  color: #0f1419;
`;

export default function Nav() {
  return (
    <NavItem>
      {options.map((option, index) => {
        const { Icon } = option;

        return (
          <Link key={index} href="./">
            <Div>
              <Container>
                <Icon style={{ color: "#0f1419", fontSize: "2rem" }} />
                <LinkText>{option.name}</LinkText>
              </Container>
            </Div>
          </Link>
        );
      })}
    </NavItem>
  );
}
