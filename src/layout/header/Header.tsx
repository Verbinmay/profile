import styled from "styled-components";
import { Logo } from "../../components/logo/Logo";
import { Menu } from "../../components/menu/Menu";

export const Header = () => {
  return (
    <StyledHeader>
      <Logo />
      <Menu menuItems={['Home', 'Skills', 'Works', 'Testimony', 'Contact']} />
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  background-color: lightblue;
  display: flex;
  justify-content: space-between;
`;
