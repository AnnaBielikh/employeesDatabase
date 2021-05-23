import React from "react";
import PropTypes from "prop-types";

import { StyledEmployeesList, StyledAlert } from "./index.style";

import FilterBlock from "../../filtersBlock";
import { EmployeeCard } from "./EmployeeCard";

const EmployeersList = (props) => {
  const { employeesList } = props;

  return (
    <>
      <FilterBlock {...props}></FilterBlock>

      {employeesList && employeesList.length ? (
        <StyledEmployeesList {...props}>
          {employeesList.map((item) => {
            return <EmployeeCard item={item} key={item.id} {...props} />;
          })}
        </StyledEmployeesList>
      ) : (
        <StyledAlert danger>
          The employee database is empty or nothing was found for the selected
          options. Please, add new employee
        </StyledAlert>
      )}
    </>
  );
};

EmployeersList.propTypes = {
  employeesList: PropTypes.arrayOf(PropTypes.shape),
};

export { EmployeersList };
