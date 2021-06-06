import React, { useState, useMemo } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { initSortValue } from "./constants/Labels";
import { employeesListInit } from "./mock";
import { getEmployeesByFilters } from "./utils/getEmployeesByFilters";
import { StyledMainContent } from "./index.style";

import { Header } from "./components/header";
import { EmployeersList } from "./components/employeesList";
import { EmployeeForm } from "./components/employeeForm";

const App = () => {
  const [employeesList, setEmployeesList] = useState(employeesListInit);
  const [filtersList, setFiltersList] = useState([]);
  const [sorting, setSorting] = useState(initSortValue);
  const [search, setSearch] = useState();
  const [activeEmployee, setActiveEmployee] = useState(null);

  const filteredEmployeesList = useMemo(
    () => getEmployeesByFilters(employeesList, filtersList, search, sorting),
    [employeesList, filtersList, search, sorting]
  );

  const changeFilters = (key) => {
    const isFilterExist = filtersList.some((i) => i === key);
    const updateFilters = isFilterExist
      ? filtersList.filter((i) => i !== key)
      : [...filtersList, key];

    setFiltersList(updateFilters);
  };

  const removeEmployee = (id) => {
    setEmployeesList(employeesList.filter((item) => item.id !== id));
  };

  const saveEmployee = (data) => {
    if (activeEmployee) {
      setEmployeesList(
        employeesList.map((item) =>
          item.id === activeEmployee.id ? { ...item, ...data } : item
        )
      );
    } else setEmployeesList([...employeesList, { id: Date.now(), ...data }]);
  };

  return (
    <Router>
      <Header setActiveEmployee={setActiveEmployee}></Header>
      <StyledMainContent>
        <Switch>
          <Route exact path="/">
            <EmployeersList
              employeesList={filteredEmployeesList}
              removeEmployee={removeEmployee}
              setActiveEmployee={setActiveEmployee}
              filtersList={filtersList}
              changeFilters={changeFilters}
              sorting={sorting}
              changeSorting={(value) => setSorting(value)}
              search={search}
              changeSearch={(value) => setSearch(value)}
            />
          </Route>
          <Route path="/employee">
            <EmployeeForm
              activeEmployee={activeEmployee}
              saveEmployee={saveEmployee}
            ></EmployeeForm>
          </Route>
        </Switch>
      </StyledMainContent>
    </Router>
  );
};

export { App };
