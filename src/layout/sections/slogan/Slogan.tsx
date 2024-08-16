import styled from "styled-components";
import { StyledButton } from "../../../components/Button";
import { SectionTitle } from "../../../components/SelectionTitle";

export const Slogan = () => {
  return (
    <StyledSlogan>
      <SectionTitle>Frontend Developer</SectionTitle>
      <StyledButton>Hire me</StyledButton>;
    </StyledSlogan>
  );
};

const StyledSlogan = styled.section`
  min-height: 30vh;
  background-color: lightblue;
`;
