import styled from "styled-components";
import firstWorkImage from "../../../assets/images/jinshi-and-jué-_-wuthering-waves-_1_.jpg";
import { FlexContainer } from "../../../components/FlexContainer";
import { SectionTitle } from "../../../components/SelectionTitle";
import { Menu } from "../../../components/menu/Menu";
import { Work } from "./work/Work";
export const Works = () => {
  return (
    <StyledWorks>
      <SectionTitle>My works</SectionTitle>
      <Menu menuItems={["All", "landing page", "React", "spa"]} />
      <FlexContainer justifyContent={"space-around"}>
        <Work
          image={firstWorkImage}
          alt={"firstWorkImage"}
          title={"Social Network"}
          text={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          }
          demo={"https://www.google.com"}
          code={"https://www.google.com"}
        />
        <Work
          image={firstWorkImage}
          alt={"firstWorkImage"}
          title={"Social Network"}
          text={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          }
          demo={"https://www.google.com"}
          code={"https://www.google.com"}
        />
      </FlexContainer>
    </StyledWorks>
  );
};
const StyledWorks = styled.section`
  min-height: 100vh;
  background-color: lightpink;
`;
