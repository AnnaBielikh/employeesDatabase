import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import styled from "styled-components";

import Header from "./components/Header/Header";
import EmployeersList from "./containers/EmployeesList";
import Employee from "./containers/Employee";

const StyledMain = styled.main`
  width: ${(props) => props.theme.pageWidth};
  margin: 30px auto;
  max-width: 100%;
`;

function App() {
  const employeesListInit = [
    {
      id: 1,
      name: "ann",
      surname: "Bielikh",
      phone: "+380905646565",
      email: "biel@gfg.cob",
      position: "3",
    },
    {
      id: 2,
      name: "den",
      surname: "Smornov",
      email: "sm@fgrerg.com",
      position: "1",
    },
    {
      id: 3,
      name: "nastya",
      phone: "+380905646565",
      email: "gkifj@fvg.br",
      position: "2",
    },
    {
      id: 4,
      name: "inna",
      phone: "+380905646565",
      email: "inna@fvg.br",
      position: "3",
    },
  ];

  const [employeesList, setEmployeesList] = useState(employeesListInit);
  const [filteredEmployeesList, setFilteredEmployeesList] = useState([]);
  const [activeEmployee, setActiveEmployee] = useState(null);

  useEffect(() => {
    setFilteredEmployeesList(employeesList);
  }, [employeesList]);

  const removeEmployee = (id) => {
    setEmployeesList(employeesList.filter((item) => item.id !== id));
  };

  const addEmployee = (data) => {
    console.log("addEmployee", data);
    setEmployeesList(
      employeesList.concat([
        {
          id: Date.now(),
          ...data,
        },
      ])
    );
  };

  const editEmployee = (data) => {
    setEmployeesList(
      employeesList.map((item) =>
        item.id === data.id ? { ...item, ...data } : item
      )
    );
  };

  const editEmployeeInit = (id) => {
    const employee = employeesList.find((item) => item.id === id);
    setActiveEmployee(employee);
  };

  const filterEmployeeInit = (position) => {
    console.log("filterEmployeeInit", position);
    setEmployeesList(
      employeesList.filter((item) => item.position === position)
    );
  };

  const addEmployeeInit = () => {
    setActiveEmployee(null);
  };

  return (
    <Router>
      <Header borderWidth="2px" addEmployeeInit={addEmployeeInit}></Header>
      <StyledMain>
        <Switch>
          <Route exact path="/">
            <EmployeersList
              filterEmployeeInit={filterEmployeeInit}
              employeesList={filteredEmployeesList}
              removeEmployee={removeEmployee}
              editEmployeeInit={editEmployeeInit}
            />
          </Route>
          <Route path="/employee">
            <Employee
              activeEmployee={activeEmployee}
              addEmployee={addEmployee}
              editEmployee={editEmployee}
            ></Employee>
          </Route>
        </Switch>
      </StyledMain>
    </Router>
  );
}

export default App;
