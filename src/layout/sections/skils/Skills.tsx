import styled from "styled-components";
import { Container } from "../../../components/Container";
import { FlexContainer } from "../../../components/FlexContainer";
import { SectionTitle } from "../../../components/SelectionTitle";
import { Skill } from "./skill/Skill";

export const Skills = () => {
  return (
    <StyledSkills>
      <Container>
        <SectionTitle>My skills</SectionTitle>
        <FlexContainer wrap="wrap" justifyContent="space-between">
          <Skill
            iconId="codeSvg"
            title="html5"
            text="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim"
          />
          <Skill
            iconId="cssSvg"
            title="css3"
            text="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim"
          />
          <Skill
            iconId="reactSvg"
            title="React"
            text="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim"
          />
          <Skill
            iconId="reactSvg"
            title="React"
            text="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim"
          />
          <Skill
            iconId="typescriptSvg"
            title="typescript"
            text="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim"
          />
          <Skill
            iconId="figmaSvg"
            title="WEB DESIgN"
            text="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim"
          />
        </FlexContainer>
      </Container>
    </StyledSkills>
  );
};

const StyledSkills = styled.section``;
