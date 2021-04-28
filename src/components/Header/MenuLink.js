import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const StyledLi = styled.li`
  list-style: none;
  position: relative;
`;

const StyledNavLink = styled(NavLink)`
  color: ${(props) => props.theme.colors.link || "#000000"};
  padding: 15px;
  display: block;

  &.active {
    cursor: context-menu;
    text-decoration: none;
    background-color: #bbbbbb;
    color: ${(props) => props.theme.colors.primary || "#000000"};
  }
`;

const MenuLink = ({ addEmployeeInit, item }) => (
  <StyledLi>
    <StyledNavLink
      onClick={() => addEmployeeInit()}
      exact
      to={item.link}
      activeClassName="active"
    >
      {item.title}
    </StyledNavLink>
  </StyledLi>
);

export default MenuLink;
