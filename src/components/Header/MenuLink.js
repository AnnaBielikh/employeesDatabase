import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const StyledLi = styled.li`
  list-style: none;
  position: relative;
`;

const StyledNavLink = styled(NavLink)`
  color: ${(props) => props.color || props.theme.colors.link};
  padding: 20px 20px;
  display: block;

  &.active {
    cursor: context-menu;
    text-decoration: none;
    background-color: #e8eaec;
  }
`;

const MenuLink = ({ color, addEmployeeInit, item }) => (
  <StyledLi>
    <StyledNavLink
      onClick={() => addEmployeeInit()}
      color={color}
      exact
      to={item.link}
      activeClassName="active"
    >
      {item.title}
    </StyledNavLink>
  </StyledLi>
);

export default MenuLink;
