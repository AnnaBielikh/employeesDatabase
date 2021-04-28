import React from "react";
import styled from "styled-components";

import MenuLink from "./MenuLink";

const StyledHeader = styled.header`
  border-bottom: ${(props) => props.theme.borderWidth || "2px"} solid
    ${(props) => props.theme.colors.border || "#000000"};
  background-color: ${(props) => props.theme.colors.background || "#ffffff"};
`;

const StyledNav = styled.nav`
  max-width: 100%;
  width: ${(props) => props.theme.pageWidth || "800px"};
  margin: 0 auto;
`;

const StyledUl = styled.ul`
  display: flex;
  align-items: center;
`;

const Header = (props) => (
  <StyledHeader>
    <StyledNav>
      <StyledUl>
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
