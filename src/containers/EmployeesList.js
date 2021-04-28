import React from "react";
import styled from "styled-components";

import FilterBlock from "../components/Filter/FilterBlock";
import EmployeeItem from "../components/Employee/EmployeeItem";
import Alert from "../components/Alert/Alert";

const StyledEmployeersList = styled.div`
  display: ${(props) => props.display || "flex"};
  flex-wrap: ${(props) => props.wrap || "wrap"};
  justify-content: ${(props) => props.justify || "space-between"};
  padding: 20px 0px;
`;

function EmployeersList({ employeesList, ...props }) {
  return (
    <>
      <FilterBlock {...props}></FilterBlock>

      {employeesList && employeesList.length ? (
        <StyledEmployeersList {...props}>
          {employeesList.map((item, i) => {
            return <EmployeeItem item={item} key={item.id} {...props} />;
          })}
        </StyledEmployeersList>
      ) : (
        <Alert danger>
          The employee database is empty or nothing was found for the selected
          options. Please, add new employee
          {/* <a href="/employee">here</a> */}
        </Alert>
      )}
    </>
  );
}

export default EmployeersList;
