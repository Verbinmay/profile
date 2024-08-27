import styled from "styled-components";
import { FlexContainer } from "../../../../components/FlexContainer";
import { Icon } from "../../../../components/icon/Icon";

type SkillPropsType = {
  iconId: string;
  title: string;
  text: string;
};

export const Skill = (props: SkillPropsType) => {
  return (
    <StyledSkill>
      <FlexContainer direction="column" alignItems="center">
        <IconWrapper>
          <Icon iconId={props.iconId} />
        </IconWrapper>
        <SkillTitle>{props.title}</SkillTitle>
        <SkillText>{props.text}</SkillText>
      </FlexContainer>
    </StyledSkill>
  );
};

const StyledSkill = styled.div`
  width: 380px;
  padding: 62px 20px 40px;
`;

const IconWrapper = styled.div`
  position: relative;

  &::before {
    content: "";
    display: inline-block;
    position: absolute;
    width: 80px;
    height: 80px;
    background: rgba(255, 255, 255, 0.1);
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%) rotate(-45deg);
    /* transform-origin: top left; */
  }
`;
const SkillTitle = styled.h3`
  text-align: center;
  margin: 70px 15px 0;
  font-family: "Josefin Sans", sans-serif;
  font-weight: 700;
  font-size: 16px;
  text-transform: uppercase;
  letter-spacing: 1px;
`;
const SkillText = styled.p`
  text-align: center;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.4;
`;
