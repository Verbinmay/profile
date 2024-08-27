import styled from "styled-components";
import { Link } from "../../../../components/Link";

type TabMenuPropsType = {
  menuItems: Array<string>;
};

export const TabMenu = (props: TabMenuPropsType) => {
  return (
    <StyledTabMenu>
      <ul>
        {props.menuItems.map((item, index) => (
          <ListItem key={index}>
            <Link href="">{item}</Link>
          </ListItem>
        ))}
      </ul>
    </StyledTabMenu>
  );
};

const StyledTabMenu = styled.nav`
  margin-bottom: 40px;
  ul {
    display: flex;
    gap: 20px;
    justify-content: center;
  }
`;

const ListItem = styled.li`

`;
