import styled from "styled-components";
import { FlexContainer } from "../../components/FlexContainer";
import { Icon } from "../../components/icon/Icon";

export const Footer = () => {
  return (
    <StyledFooter>
      <FlexContainer direction="column" alignItems="center">
        <StyledName>Mark</StyledName>
        <SocialList>
          <SocialItem>
            <SocialIconLink>
              <Icon
                iconId={"vkSvg"}
                height={"21px"}
                width={"21px"}
                viewBox={"0 0 21px 21px"}
              />
            </SocialIconLink>
          </SocialItem>
          <SocialItem>
            <SocialIconLink>
              <Icon
                iconId={"telegramSvg"}
                height={"21px"}
                width={"21px"}
                viewBox={"0 0 21px 21px"}
              />
            </SocialIconLink>
          </SocialItem>
        </SocialList>
        <Copyright>© 2021</Copyright>
      </FlexContainer>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  background-color: lightsalmon;
  min-height: 20hv;
`;
const StyledName = styled.span``;
const SocialList = styled.ul`
  display: flex;
  gap: 30px;
`;
const SocialItem = styled.li``;
const SocialIconLink = styled.a``;
const Copyright = styled.small``;
