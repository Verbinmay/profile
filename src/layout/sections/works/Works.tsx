import styled from "styled-components";
import firstWorkImage from "../../../assets/images/jinshi-and-jué-_-wuthering-waves-_1_.jpg";
import { Container } from "../../../components/Container";
import { FlexContainer } from "../../../components/FlexContainer";
import { SectionTitle } from "../../../components/SelectionTitle";
import { TabMenu } from "./tabMenu/TabMenu";
import { Work } from "./work/Work";
export const Works = () => {
  return (
    <StyledWorks>
      <Container>
        <SectionTitle>My works</SectionTitle>
        <TabMenu menuItems={["All", "landing page", "React", "spa"]} />
        <FlexContainer justifyContent={"space-between"} alignItems="flex-start">
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
      </Container>
    </StyledWorks>
  );
};
const StyledWorks = styled.section``;
