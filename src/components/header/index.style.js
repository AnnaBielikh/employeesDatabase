import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const StyledHeader = styled.header`
  background-color: ${(props) => props.theme.colors.border};
`;

export const StyledHeaderNavbar = styled.nav`
  max-width: 100%;
  width: ${(props) => props.theme.pageWidth};
  margin: 0 auto;
`;

export const StyledHeaderdMenu = styled.ul`
  display: flex;
  align-items: center;
`;

export const StyledHeaderdMenuItem = styled.li`
  list-style: none;
  position: relative;
`;

export const StyledHeaderdMenuLink = styled(NavLink)`
  color: ${(props) => props.theme.colors.link};
  padding: 15px;
  display: block;

  &.active {
    cursor: context-menu;
    text-decoration: none;
    background-color: ${(props) => props.theme.colors.secondary};
    color: ${(props) => props.theme.colors.border};
  }
`;
