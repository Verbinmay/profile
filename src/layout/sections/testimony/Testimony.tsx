import styled from "styled-components";
import { FlexContainer } from "../../../components/FlexContainer";
import { SectionTitle } from "../../../components/SelectionTitle";
import { Icon } from "../../../components/icon/Icon";
import { Slider } from "../../../components/slider/Slider";

export const Testimony = () => {
  return (
    <StyledTestimony>
      <SectionTitle>Testimony</SectionTitle>
      <FlexContainer direction="column" alignItems="center">
        <Icon iconId={"quote"} />
        <Slider />
      </FlexContainer>
    </StyledTestimony>
  );
};

const StyledTestimony = styled.section`
  min-height: 50vh;
  background-color: lightgoldenrodyellow;
`;
