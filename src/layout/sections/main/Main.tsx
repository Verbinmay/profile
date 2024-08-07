import styled from "styled-components";
import photo from "../../../assets/images/ab85692b4b4e9b0e585e0d0f997c62dd.webp";
import { FlexContainer } from "../../../components/FlexContainer";

export const Main = () => {
  return (
    <StyledMain>
      <FlexContainer alignItems="center" justifyContent="space-around">
        <div>
          <span>Hi There</span>
          <h2>I am Changli</h2>
          <span>A Wuthering Waves Character.</span>
        </div>

        <Photo src={photo} alt="Changli" />
      </FlexContainer>
    </StyledMain>
  );
};

const StyledMain = styled.div`
  min-height: 100vh;
  background-color: lightgoldenrodyellow;
`;

const Photo = styled.img`
  width: 350px;
  height: 430px;
  object-fit: cover;
  rotate: 90deg;
`;
