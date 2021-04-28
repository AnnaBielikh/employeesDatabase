import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import styled from "styled-components";

import { initSortValue } from "./constants/Labels";
import { sortAsc, sortDesc, sortRelevance } from "./utils/compareName";

import Header from "./components/Header/Header";
import EmployeersList from "./containers/EmployeesList";
import EmployeeForm from "./components/Form/EmployeeForm";

const StyledMain = styled.main`
  max-width: 100%;
  width: ${(props) => props.width || props.theme.pageWidth};
  margin: 30px auto;
`;

function App(props) {
  const employeesListInit = [
    {
      id: 1,
      name: "ann",
      surname: "Bielikh",
      phone: "380905223696",
      email: "biel@gfg.cob",
      position: "3",
      photo: "/images/image1.jpg",
    },
    {
      id: 2,
      name: "den",
      phone: "380905646565",
      surname: "Smornov",
      email: "sm@fgrerg.com",
      position: "1",
    },
    {
      id: 3,
      name: "nastya",
      phone: "380905223696",
      email: "gkifj@fvg.br",
      position: "2",
      photo: "/images/image2.jpg",
    },
    {
      id: 4,
      name: "inna",
      phone: "380905646565",
      email: "inna@fvg.br",
      position: "3",
    },
  ];

  const [employeesList, setEmployeesList] = useState(employeesListInit);
  const [filteredEmployeesList, setFilteredEmployeesList] = useState();
  const [filter, setFilter] = useState([]);
  const [sorting, setSorting] = useState(initSortValue);
  const [search, setSearch] = useState();
  const [activeEmployee, setActiveEmployee] = useState(null);

  function filterByPosition(employeesList) {
    console.log("filter now");
    if (filter.length) {
      let newEmployeesList = employeesList.filter((item) =>
        filter.includes(item.position)
      );
      return newEmployeesList;
    }
    return employeesList;
  }

  function searchByNameAndPhone(employeesList) {
    console.log("search now");
    if (search) {
      console.log("search", search);
      let newEmployeesList = employeesList.filter((item) => {
        return (
          item.name.toLowerCase().includes(search.toLowerCase()) ||
          item.phone.toLowerCase().includes(search.toLowerCase())
        );
      });
      return newEmployeesList;
    }
    return employeesList;
  }

  function sortByName(employeesList) {
    console.log("sort now");
    if (sorting === "nameAsc") {
      return employeesList.sort(sortAsc);
    } else if (sorting === "nameDesc") {
      return employeesList.sort(sortDesc);
    } else if (sorting === "relevance") {
      return employeesList.sort(sortRelevance);
    }
  }

  useEffect(() => {
    let calculateEmployeesList = sortByName(
      searchByNameAndPhone(filterByPosition(employeesList))
    );
    let newEmployeesList = [];
    newEmployeesList = newEmployeesList.concat(calculateEmployeesList);

    setFilteredEmployeesList(newEmployeesList);
  }, [employeesList, filter, sorting, search]);

  const changeFilter = (key) => {
    let newFilter = [];
    newFilter = newFilter.concat(filter);

    const index = newFilter.indexOf(key);
    if (index === -1) {
      newFilter.push(key);
    } else {
      newFilter.splice(index, 1);
    }

    setFilter(newFilter);
  };

  const changeSorting = (value) => {
    setSorting(value);
  };

  const changeSearch = (value) => {
    console.log("changeSearch value", value);
    setSearch(value);
  };

  const removeEmployee = (id) => {
    setEmployeesList(employeesList.filter((item) => item.id !== id));
  };

  const addEmployee = (data) => {
    // console.log("addEmployee", data);
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

  const addEmployeeInit = () => {
    setActiveEmployee(null);
  };

  return (
    <Router>
      <Header borderWidth="2px" addEmployeeInit={addEmployeeInit}></Header>
      <StyledMain {...props}>
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
      </StyledMain>
    </Router>
  );
}

export default App;
