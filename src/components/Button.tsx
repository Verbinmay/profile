import styled from "styled-components";
import { myTheme } from "../styles/Theme";

export const StyledButton = styled.button`
  font-weight: 400;
  font-size: 14px;
  text-transform: uppercase;
  letter-spacing: 1px;
  height: 32px;
  width: 170px;
  position: relative;
  z-index: 0;

  &:hover {
    &::before {
      width: 100%;
      height: 100%;
    }
  }
  &::before {
    content: "";
    display: inline-block;
    width: 50%;
    height: 10px;
    background-color: ${myTheme.colors.accent};
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    z-index: -1;
  }
`;
