import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import PropTypes from "prop-types";

const StyledLi = styled.li`
  list-style: none;
  position: relative;
`;

const StyledNavLink = styled(NavLink)`
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

function MenuLink(props) {
  const { addEmployeeInit, item } = props;

  return (
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
}

MenuLink.propTypes = {
  addEmployeeInit: PropTypes.func,
  item: PropTypes.object,
};

export default MenuLink;
