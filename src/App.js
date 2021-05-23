import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { initSortValue } from "./constants/Labels";
import { employeesListInit } from "./mock";
import {
  compareNameByAsc,
  compareNameByDesc,
  compareIdByRelevance,
} from "./utils/compareName";
import { StyledMainContent } from "./index.style";

import { Header } from "./components/header";
import { EmployeersList } from "./components/employee/employeesList";
import { EmployeeForm } from "./components/employee/employeeForm";

const App = () => {
  const [employeesList, setEmployeesList] = useState(employeesListInit);
  const [filteredEmployeesList, setFilteredEmployeesList] = useState();
  const [filter, setFilter] = useState([]);
  const [sorting, setSorting] = useState(initSortValue);
  const [search, setSearch] = useState();
  const [activeEmployee, setActiveEmployee] = useState(null);

  const filterByPosition = (employeesList) => {
    if (filter.length) {
      let newEmployeesList = employeesList.filter((item) =>
        filter.includes(item.position)
      );
      return newEmployeesList;
    }
    return employeesList;
  };

  const searchByNameAndPhone = (employeesList) => {
    if (search) {
      let newEmployeesList = employeesList.filter((item) => {
        return (
          item.name.toLowerCase().includes(search.toLowerCase()) ||
          item.phone.toLowerCase().includes(search.toLowerCase())
        );
      });
      return newEmployeesList;
    }
    return employeesList;
  };

  const sortByName = (employeesList) => {
    if (sorting === "nameAsc") {
      return employeesList.sort(compareNameByAsc);
    } else if (sorting === "nameDesc") {
      return employeesList.sort(compareNameByDesc);
    } else if (sorting === "relevance") {
      return employeesList.sort(compareIdByRelevance);
    }
  };

  useEffect(() => {
    const calculateEmployeesList = sortByName(
      searchByNameAndPhone(filterByPosition(employeesList))
    );

    setFilteredEmployeesList([...calculateEmployeesList]);
  }, [employeesList, filter, sorting, search]);

  const changeFilter = (key) => {
    const isFilterExist = filter.some((i) => i === key);
    const updateFilters = isFilterExist
      ? filter.filter((i) => i !== key)
      : [...filter, key];

    setFilter(updateFilters);
  };

  const changeSorting = (value) => {
    setSorting(value);
  };

  const changeSearch = (value) => {
    setSearch(value);
  };

  const removeEmployee = (id) => {
    setEmployeesList(employeesList.filter((item) => item.id !== id));
  };

  const addEmployee = (data) => {
    setEmployeesList([...employeesList, { id: Date.now(), ...data }]);
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

  const addEmployeeInit = () => {
    setActiveEmployee(null);
  };

  return (
    <Router>
      <Header addEmployeeInit={addEmployeeInit}></Header>
      <StyledMainContent>
        <Switch>
          <Route exact path="/">
            <EmployeersList
              employeesList={filteredEmployeesList}
              removeEmployee={removeEmployee}
              editEmployeeInit={editEmployeeInit}
              filter={filter}
              changeFilter={changeFilter}
              sorting={sorting}
              changeSorting={changeSorting}
              search={search}
              changeSearch={changeSearch}
            />
          </Route>
          <Route path="/employee">
            <EmployeeForm
              activeEmployee={activeEmployee}
              addEmployee={addEmployee}
              editEmployee={editEmployee}
            ></EmployeeForm>
          </Route>
        </Switch>
      </StyledMainContent>
    </Router>
  );
};

export { App };
