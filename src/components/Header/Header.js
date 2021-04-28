import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import MenuLink from "./MenuLink";

const StyledHeader = styled.header`
  background-color: ${(props) => props.theme.colors.border};
`;

const StyledNav = styled.nav`
  max-width: 100%;
  width: ${(props) => props.theme.pageWidth};
  margin: 0 auto;
`;

const StyledUl = styled.ul`
  display: flex;
  align-items: center;
`;

function Header(props) {
  return (
    <StyledHeader>
      <StyledNav>
        <StyledUl>
          <MenuLink
            addEmployeeInit={() => null}
            item={{ title: "Employees list", link: "/" }}
          ></MenuLink>
          <MenuLink
            addEmployeeInit={props.addEmployeeInit}
            item={{ title: "Add employee", link: "/employee" }}
          ></MenuLink>
        </StyledUl>
      </StyledNav>
    </StyledHeader>
  );
}

Header.propTypes = {
  addEmployeeInit: PropTypes.func,
};

export default Header;
