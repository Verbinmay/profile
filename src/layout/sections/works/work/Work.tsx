import styled from "styled-components";
import { StyledButton } from "../../../../components/Button";
import { Link } from "../../../../components/Link";
import { myTheme } from "../../../../styles/Theme";
type WorkPropsType = {
  image: string;
  alt: string;
  title: string;
  text: string;
  demo: string;
  code: string;
};

export const Work = (props: WorkPropsType) => {
  return (
    <StyledWork>
      <ImageWrapper>
        <Image src={props.image} alt={props.alt} />
        <StyledButton>View Project</StyledButton>
      </ImageWrapper>

      <Description>
        <Title>{props.title}</Title>
        <Text>{props.text}</Text>
        <Link href={props.demo}>demo</Link>
        <Link href={props.code}>code</Link>
      </Description>
    </StyledWork>
  );
};
const StyledWork = styled.div`
  background-color: ${myTheme.colors.secondaryBg};
  max-width: 540px;
  width: 100%;

  ${Link} {
    padding: 10px 0;

    & + ${Link} {
      margin-left: 20px;
    }
  }
`;

const ImageWrapper = styled.div`
  position: relative;

  &:hover {
    & ${StyledButton} {
      opacity: 1;
    }

    &::before {
      content: "";
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      background: rgba(0, 0, 0, 0.3);
      backdrop-filter: blur(4px);
    }
  }

  ${StyledButton} {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    opacity: 0;

    &::before {
      width: 100%;
      height: 100%;
    }
  }
`;
const Image = styled.img`
  object-fit: cover;
  width: 100%;
  height: 260px;
`;

const Description = styled.div`
  padding: 25px 20px;
`;
const Title = styled.h3``;

const Text = styled.p`
  margin: 14px 0px 10px;
`;
