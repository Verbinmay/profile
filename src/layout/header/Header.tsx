import styled from "styled-components";
import { Container } from "../../components/Container";
import { FlexContainer } from "../../components/FlexContainer";
import { Logo } from "../../components/logo/Logo";
import { myTheme } from "../../styles/Theme";
import { HeaderMenu } from "./headerMenu/HeaderMenu";

export const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <FlexContainer justifyContent="space-between" alignItems="center">
          <Logo />
          <HeaderMenu
            menuItems={["Home", "Skills", "Works", "Testimony", "Contact"]}
          />
        </FlexContainer>
      </Container>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  background-color: ${myTheme.colors.primaryBg};
  padding: 20px 0;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9999;
`;
