import React from "react";
import PropTypes from "prop-types";

import { StyledEmployeesList, StyledAlert } from "./index.style";

import { FiltersBlock } from "../filtersBlock";
import { EmployeeCard } from "../employeeCard";

const EmployeersList = (props) => {
  const {
    employeesList,
    removeEmployee,
    setActiveEmployee,
    filtersList,
    changeFilters,
    sorting,
    changeSorting,
    search,
    changeSearch,
  } = props;

  return (
    <>
      <FiltersBlock
        changeSearch={changeSearch}
        search={search}
        changeSorting={changeSorting}
        sorting={sorting}
        changeFilters={changeFilters}
        filtersList={filtersList}
      ></FiltersBlock>

      {employeesList && employeesList.length ? (
        <StyledEmployeesList>
          {employeesList.map((item) => {
            return (
              <EmployeeCard
                item={item}
                key={item.id}
                removeEmployee={removeEmployee}
                setActiveEmployee={setActiveEmployee}
              />
            );
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
  removeEmployee: PropTypes.func,
  setActiveEmployee: PropTypes.func,
  filtersList: PropTypes.arrayOf(PropTypes.shape),
  changeFilters: PropTypes.func,
  sorting: PropTypes.string,
  changeSorting: PropTypes.func,
  search: PropTypes.string,
  changeSearch: PropTypes.func,
};

export { EmployeersList };
