import styled from "styled-components";

type MenuPropsType = {
  menuItems: Array<string>;
};

export const Menu = (props: MenuPropsType) => {
  return (
    <StyledMenu>
      <ul>
        {props.menuItems.map((item, index) => (
          <li key={index}>
            <a href="">{item}</a>
          </li>
        ))}
      </ul>
    </StyledMenu>
  );
};

const StyledMenu = styled.nav`
  ul {
    display: flex;
    gap: 30px;
  }
`;
