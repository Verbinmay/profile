import styled from "styled-components";
import { myTheme } from "../styles/Theme";

export const SectionTitle = styled.h2`
  text-align: center;
  font-family: "Josefin Sans", sans-serif;
  font-weight: 600;
  font-size: 36px;
  letter-spacing: 5px;
  position: relative;
  margin-bottom: 90px;

  &::before {
    display: inline-block;
    content: "";
    width: 55px;
    height: 1px;
    background-color: ${myTheme.colors.font};
    position: absolute;
    bottom: -30px;
    left: 50%;
    transform: translateX(-50%);
  }
`;
