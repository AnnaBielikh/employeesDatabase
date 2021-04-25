import React from "react";
import styled from "styled-components";

import MenuLink from "./MenuLink";

const StyledHeader = styled.header`
  border-bottom: ${(props) => props.borderWidth || props.theme.borderWidth}
    ${(props) => props.borderType || "solid"}
    ${(props) => props.borderColor || props.theme.colors.border};
  background-color: ${(props) =>
    props.backgroundColor || props.theme.colors.background};
`;

const StyledNav = styled.nav`
  width: ${(props) => props.width || props.theme.pageWidth};
  margin: 0 auto;
  max-width: 100%;
`;

const StyledUl = styled.ul`
  display: ${(props) => props.display || "flex"};
  align-items: ${(props) => props.align || "center"};
`;

const Header = (props) => (
  <StyledHeader {...props}>
    <StyledNav {...props}>
      <StyledUl {...props}>
        <MenuLink
          addEmployeeInit={() => null}
          item={{ title: "Employees list", link: "/" }}
        ></MenuLink>
        <MenuLink
          addEmployeeInit={props.addEmployeeInit}
          item={{ title: "Add new employee", link: "/employee" }}
        ></MenuLink>
      </StyledUl>
    </StyledNav>
  </StyledHeader>
);

export default Header;
