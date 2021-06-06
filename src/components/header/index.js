import React from "react";
import PropTypes from "prop-types";

import {
  StyledHeader,
  StyledHeaderNavbar,
  StyledHeaderdMenu,
  StyledHeaderdMenuLink,
  StyledHeaderdMenuItem,
} from "./index.style";

const Header = (props) => {
  const { setActiveEmployee } = props;

  return (
    <StyledHeader>
      <StyledHeaderNavbar>
        <StyledHeaderdMenu>
          <StyledHeaderdMenuItem>
            <StyledHeaderdMenuLink exact to="/" activeClassName="active">
              Employees list
            </StyledHeaderdMenuLink>
          </StyledHeaderdMenuItem>
          <StyledHeaderdMenuItem>
            <StyledHeaderdMenuLink
              onClick={() => setActiveEmployee(null)}
              exact
              to="/employee"
              activeClassName="active"
            >
              Add employee
            </StyledHeaderdMenuLink>
          </StyledHeaderdMenuItem>
        </StyledHeaderdMenu>
      </StyledHeaderNavbar>
    </StyledHeader>
  );
};

Header.propTypes = {
  addEmployeeInit: PropTypes.func,
};

export { Header };
