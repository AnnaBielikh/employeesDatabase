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
  width: ${(props) => props.theme.pageWidth};
  margin: 30px auto;
  color: ${(props) => props.theme.colors.primary};

  @media ${(props) => props.theme.media.tablet} {
    padding: 0px 20px;
  }
`;

function App() {
  const employeesListInit = [
    {
      id: 1,
      name: "Ann",
      surname: "Bielikh",
      phone: "380500505555",
      email: "bielikh@di.com",
      position: "4",
      photo: "/images/image1.jpg",
    },
    {
      id: 2,
      name: "Den",
      phone: "380507017170",
      surname: "Ivanov",
      email: "ivanov@di.com",
      position: "1",
    },
    {
      id: 3,
      name: "Nastya",
      phone: "380905223696",
      email: "nastya@di.com",
      position: "2",
      photo: "/images/image2.jpg",
    },
    {
      id: 4,
      name: "Inna",
      phone: "380905556565",
      email: "inna@di.com",
      position: "3",
      photo: "/images/image3.jpg",
    },
  ];

  const [employeesList, setEmployeesList] = useState(employeesListInit);
  const [filteredEmployeesList, setFilteredEmployeesList] = useState();
  const [filter, setFilter] = useState([]);
  const [sorting, setSorting] = useState(initSortValue);
  const [search, setSearch] = useState();
  const [activeEmployee, setActiveEmployee] = useState(null);

  function filterByPosition(employeesList) {
    if (filter.length) {
      let newEmployeesList = employeesList.filter((item) =>
        filter.includes(item.position)
      );
      return newEmployeesList;
    }
    return employeesList;
  }

  function searchByNameAndPhone(employeesList) {
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
  }

  function sortByName(employeesList) {
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
    setSearch(value);
  };

  const removeEmployee = (id) => {
    setEmployeesList(employeesList.filter((item) => item.id !== id));
  };

  const addEmployee = (data) => {
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
      <Header addEmployeeInit={addEmployeeInit}></Header>
      <StyledMain>
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
