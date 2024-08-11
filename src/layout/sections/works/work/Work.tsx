import styled from "styled-components";
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
      <Image src={props.image} alt={props.alt} />
      <Title>{props.title}</Title>
      <Text>{props.text}</Text>
      <Link href={props.demo}>demo</Link>
      <Link href={props.code}>code</Link>
    </StyledWork>
  );
};
const StyledWork = styled.div`
  background-color: lightsteelblue;
  max-width: 540px;
  width: 100%;
`;

const Image = styled.img`
  object-fit: cover;
  max-width: 100%;
`;

const Link = styled.a``;

const Title = styled.h3``;

const Text = styled.p``;
