import styled from "styled-components";
import photo from "../../../assets/images/ab85692b4b4e9b0e585e0d0f997c62dd.jpg";
import { Container } from "../../../components/Container";
import { FlexContainer } from "../../../components/FlexContainer";
import { myTheme } from "../../../styles/Theme";

export const Main = () => {
  return (
    <StyledMain>
      <Container>
        <FlexContainer alignItems="center" justifyContent="space-between">
          <div>
            <SmallText>Hi There</SmallText>
            <Name>
              I am <span>Changli</span>
            </Name>
            <MainTitle>A Wuthering Waves Character.</MainTitle>
          </div>

          <PhotoWrapper>
            <Photo src={photo} alt="Changli" />
          </PhotoWrapper>
        </FlexContainer>
      </Container>
    </StyledMain>
  );
};

const StyledMain = styled.div`
  min-height: 100vh;
  display: flex;
  background-color: ${myTheme.colors.primaryBg};
`;

const SmallText = styled.h2`
  font-size: 14px;
  font-weight: 400;
`;

const Name = styled.h1`
  font-family: "Josefin Sans", sans-serif;
  font-size: 50px;
  font-weight: 700;
  letter-spacing: 0.05em;
  margin: 10px 0;

  span {
    position: relative;
    z-index: 0;
    &::before {
      content: "";
      display: inline-block;
      width: 100%;
      height: 20px;
      background-color: ${myTheme.colors.accent};

      position: absolute;
      bottom: 0;
      z-index: -1;
    }
  }
`;

const MainTitle = styled.h2`
  font-size: 27px;
  font-weight: 400;
  line-height: 40px;
`;

const PhotoWrapper = styled.div`
  position: relative;
  z-index: 1;

  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    border: 5px solid ${myTheme.colors.accent};
    top: -24px;
    left: 24px;
    z-index: -1;
  }
`;

const Photo = styled.img`
  width: 350px;
  height: 430px;
  object-fit: cover;
  object-position: 70% 50%;
`;
